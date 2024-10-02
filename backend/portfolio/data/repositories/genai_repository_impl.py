from portfolio.domain.repository_interfaces.genai_repository import GenaiRepository
import google.generativeai as genai
from portfolio.common.configs.settings import settings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate

class GenaiRepositoryImpl(GenaiRepository):
    def configure_genai(self, key: str):        
        genai.configure(api_key=key)
    
    def generate_content(self, prompt: str) -> str:
        model = genai.GenerativeModel(settings.GEMINI_VERSION)
        response = model.generate_content(prompt)
        return  response.text
    
    def get_text_chunks(self, text: str):
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
        chunks = text_splitter.split_text(text)
        return chunks
    
    async def get_serialized_vector_store(self, text_chunks, key: str) -> any:
        embeddings = GoogleGenerativeAIEmbeddings(model = settings.EMBEDDING_MODEL, google_api_key=key)
        
        vector_store = await FAISS.afrom_texts(text_chunks, embedding=embeddings)
        bytes = vector_store.serialize_to_bytes()
        return bytes
    
    def query_document(self, user_question: str, genai_key: str, serialized_vector_store: any) -> any:
        # TODO: Make it work per user
        
        embeddings = GoogleGenerativeAIEmbeddings(model = settings.EMBEDDING_MODEL,google_api_key=genai_key)
        
        vector_store = FAISS.deserialize_from_bytes(serialized_vector_store, embeddings, allow_dangerous_deserialization = True)
        
        docs = vector_store.similarity_search(user_question)

        chain = self.get_conversational_chain(genai_key)
        
        response = chain.invoke(
            {"input_documents":docs, "question": user_question}
            , return_only_outputs=True)

        return response
    
    
    def get_conversational_chain(self, genai_key: str) -> any:

        prompt_template = """
        Answer the question as detailed as possible from the provided context, make sure to provide all the details, if the answer is not in
        provided context just say, "answer is not available in the context", don't provide the wrong answer\n\n
        Context:\n {context}?\n
        Question: \n{question}\n

        Answer:
        """

        model = ChatGoogleGenerativeAI(model=settings.GEMINI_VERSION,
                                temperature=0.3, google_api_key=genai_key)

        prompt = PromptTemplate(template = prompt_template, input_variables = ["context", "question"])
        chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)

        return chain
        
    
    