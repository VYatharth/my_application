from abc import ABC, abstractmethod

class GenaiRepository(ABC):
    @abstractmethod
    def configure_genai(self, key: str) -> str:
        pass
    
    @abstractmethod
    def generate_content(self, prompt: str) -> str:
        pass
    
    @abstractmethod
    def get_text_chunks(self, text: str):
        pass
    
    @abstractmethod
    def get_serialized_vector_store(self, text_chunks, key: str):
        pass
    
    @abstractmethod
    def query_document(self, user_question: str, genai_key: str, serialized_vector_store: any) -> str:
        pass
    
    @abstractmethod
    def get_conversational_chain(self, genai_key: str) -> any:
        pass
    