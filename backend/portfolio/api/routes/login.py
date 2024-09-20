from typing import Any, Dict, List
from fastapi import APIRouter, Depends, HTTPException, UploadFile, status
from portfolio.models.LoginSchema import LoginRequestSchema
from portfolio.models.UserSchema import UserRequestSchema, UserResponseSchema
from portfolio.services.UserService import UserService
import google.generativeai as genai
import os
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from google.cloud import secretmanager, storage
import google_crc32c
from portfolio.configs.Environment import global_var

# key = os.getenv('API_KEY')
QUESTION_BUCKET='my-app-question-bucket'

router = APIRouter(
  tags=['login']
)

@router.get("/health", response_model=bool)
def health():
    return  True

@router.get("/models")
def models():
    
    get_key_and_configure_genai()
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content("Write a story about an elephant in 200 words")
    print(response.text)
    return  response.text


@router.post("/uploadfiles")
async def upload_files(files: list[UploadFile]) -> str:
    get_key_and_configure_genai()
    contents =  []
    for file in files:
        print(file.filename)
        # content = await file.read()
        
        # with open(file.filename, 'wb') as f:
        #     f.write(content)
        contents.append(file.file)
    raw_text = get_pdf_text(contents)
    text_chunks = get_text_chunks(raw_text)
    await get_vector_store(text_chunks)
    return  'uploaded'

@router.get("/question", response_model=str)
async def question(question: str) :
    get_key_and_configure_genai()
    result = {'output_text': ''}
    if question:
        result = user_input(question) 
    return result.get('output_text', 'no data found')
    
    

def get_pdf_text(pdf_docs):
    text=""
    for pdf in pdf_docs:
        pdf_reader= PdfReader(pdf)
        for page in pdf_reader.pages:
            text+= page.extract_text()
    
    # pdf_reader= PdfReader('test.pdf')
    # for page in pdf_reader.pages:
    #     text+= page.extract_text()
    
    
    return  text


def get_text_chunks(text):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
    chunks = text_splitter.split_text(text)
    return chunks


async def get_vector_store(text_chunks):
    embeddings = GoogleGenerativeAIEmbeddings(model = "models/embedding-001", google_api_key=global_var['key'])
    
    vector_store = await FAISS.afrom_texts(text_chunks, embedding=embeddings)
    # vector_store.save_local("faiss_index")
    bytes = vector_store.serialize_to_bytes()
    with open('faiss_file', 'wb') as f:
        f.write(bytes)
    
    upload_blob(QUESTION_BUCKET,'faiss_file','testy-file', None)
    upload_blob(QUESTION_BUCKET,None,'testy-bytes',bytes)


def get_conversational_chain():

    prompt_template = """
    Answer the question as detailed as possible from the provided context, make sure to provide all the details, if the answer is not in
    provided context just say, "answer is not available in the context", don't provide the wrong answer\n\n
    Context:\n {context}?\n
    Question: \n{question}\n

    Answer:
    """

    model = ChatGoogleGenerativeAI(model="gemini-pro",
                             temperature=0.3, google_api_key=global_var['key'])

    prompt = PromptTemplate(template = prompt_template, input_variables = ["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)

    return chain


def user_input(user_question):
    embeddings = GoogleGenerativeAIEmbeddings(model = "models/embedding-001",google_api_key=global_var['key'])
    
    # new_db = FAISS.load_local("faiss_index", embeddings, allow_dangerous_deserialization = True)
    new_db = None
    # with open('faiss_file',mode='rb') as myfile:
    #     new_db = FAISS.deserialize_from_bytes(myfile.read(), embeddings, allow_dangerous_deserialization = True)
    
    faiss_data = download_blob_into_memory(QUESTION_BUCKET, 'testy-bytes')
    new_db = FAISS.deserialize_from_bytes(faiss_data, embeddings, allow_dangerous_deserialization = True)
    
    docs = new_db.similarity_search(user_question)

    chain = get_conversational_chain()
    
    response = chain(
        {"input_documents":docs, "question": user_question}
        , return_only_outputs=True)

    return response

# def get_key_and_configure_genai(project_id: str, secret_id: str, version_id: str):
def get_key_and_configure_genai():
    if 'key' in global_var:
        return
    
    project_id = "my-app-424608"

    secret_id = "gg-secret"
    version_id = "2"
    """
    Access the payload for the given secret version if one exists. The version
    can be a version number as a string (e.g. "5") or an alias (e.g. "latest").
    """

    # Create the Secret Manager client.
    client = secretmanager.SecretManagerServiceClient()

    # Build the resource name of the secret version.
    name = f"projects/{project_id}/secrets/{secret_id}/versions/{version_id}"

    # Access the secret version.
    response = client.access_secret_version(request={"name": name})

    # Verify payload checksum.
    crc32c = google_crc32c.Checksum()
    crc32c.update(response.payload.data)
    if response.payload.data_crc32c != int(crc32c.hexdigest(), 16):
        print("Data corruption detected.", response)

    # Print the secret payload.
    #
    # WARNING: Do not print the secret in a production environment - this
    # snippet is showing how to access the secret material.
    global_var['key']  = response.payload.data.decode("UTF-8")
    
    genai.configure(api_key=global_var['key'] )
    
def upload_blob(bucket_name, source_file_name, destination_blob_name, content):
    """Uploads a file to the bucket."""
    # The ID of your GCS bucket
    # bucket_name = "your-bucket-name"
    # The path to your file to upload
    # source_file_name = "local/path/to/file"
    # The ID of your GCS object
    # destination_blob_name = "storage-object-name"

    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)

    # Optional: set a generation-match precondition to avoid potential race conditions
    # and data corruptions. The request to upload is aborted if the object's
    # generation number does not match your precondition. For a destination
    # object that does not yet exist, set the if_generation_match precondition to 0.
    # If the destination object already exists in your bucket, set instead a
    # generation-match precondition using its generation number.
    generation_match_precondition = 0

    # blob.upload_from_filename(source_file_name, if_generation_match=generation_match_precondition)
    if source_file_name:
        blob.upload_from_filename(source_file_name)
    if content:
        blob.upload_from_string(content)

    print(
        f"data uploaded to {destination_blob_name}."
    )

def download_blob_into_memory(bucket_name, blob_name):
    """Downloads a blob into memory."""
    # The ID of your GCS bucket
    # bucket_name = "your-bucket-name"

    # The ID of your GCS object
    # blob_name = "storage-object-name"

    storage_client = storage.Client()

    bucket = storage_client.bucket(bucket_name)

    # Construct a client side representation of a blob.
    # Note `Bucket.blob` differs from `Bucket.get_blob` as it doesn't retrieve
    # any content from Google Cloud Storage. As we don't need additional data,
    # using `Bucket.blob` is preferred here.
    blob = bucket.blob(blob_name)
    contents = blob.download_as_bytes()

    print("Downloaded storage object successful ")
    
    return contents