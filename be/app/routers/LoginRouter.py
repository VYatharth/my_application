from typing import Any, Dict, List
from fastapi import APIRouter, Depends, HTTPException, UploadFile, status
from app.schemas.LoginSchema import LoginRequestSchema
from app.schemas.UserSchema import UserRequestSchema, UserResponseSchema
from app.services.UserService import UserService
import google.generativeai as genai
import os
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate

key = os.getenv('API_KEY')
genai.configure(api_key=key)

LoginRouter = APIRouter(
  tags=['login']
)

@LoginRouter.get("/health", response_model=bool)
def health():
    return  True

@LoginRouter.get("/models")
def models():
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content("Write a story about an elephant in 200 words")
    print(response.text)
    return  response.text

# def main():

#     user_question = st.text_input("Ask a Question from the PDF Files")

#     if user_question:
#         user_input(user_question)

#     with st.sidebar:
#         st.title("Menu:")
#         pdf_docs = st.file_uploader("Upload your PDF Files and Click on the Submit & Process Button", accept_multiple_files=True)
#         if st.button("Submit & Process"):
#             with st.spinner("Processing..."):
#                 raw_text = get_pdf_text(pdf_docs)
#                 text_chunks = get_text_chunks(raw_text)
#                 get_vector_store(text_chunks)
#                 st.success("Done")

@LoginRouter.post("/uploadfiles")
async def upload_files(files: list[UploadFile]) -> str:
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

@LoginRouter.get("/question", response_model=Dict[str, Any])
async def question(question: str) :
    result = {'output_text': ''}
    if question:
      result = user_input(question) 
    return result
    
    

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
    embeddings = GoogleGenerativeAIEmbeddings(model = "models/embedding-001", google_api_key=key)
    
    vector_store = await FAISS.afrom_texts(text_chunks, embedding=embeddings)
    vector_store.save_local("faiss_index")


def get_conversational_chain():

    prompt_template = """
    Answer the question as detailed as possible from the provided context, make sure to provide all the details, if the answer is not in
    provided context just say, "answer is not available in the context", don't provide the wrong answer\n\n
    Context:\n {context}?\n
    Question: \n{question}\n

    Answer:
    """

    model = ChatGoogleGenerativeAI(model="gemini-pro",
                             temperature=0.3, google_api_key=key)

    prompt = PromptTemplate(template = prompt_template, input_variables = ["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)

    return chain


def user_input(user_question):
    embeddings = GoogleGenerativeAIEmbeddings(model = "models/embedding-001",google_api_key=key)
    
    new_db = FAISS.load_local("faiss_index", embeddings, allow_dangerous_deserialization = True)
    docs = new_db.similarity_search(user_question)

    chain = get_conversational_chain()
    
    response = chain(
        {"input_documents":docs, "question": user_question}
        , return_only_outputs=True)

    return response