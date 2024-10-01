from abc import ABC, abstractmethod

class GenaiRepository(ABC):
    @abstractmethod
    def configure_genai(self, key: str) -> str:
        pass
    
    @abstractmethod
    def generate_content(self, prompt: str) -> str:
        pass
    
    