

from abc import ABC, abstractmethod


class SecretManagerRepository(ABC):
    
    @abstractmethod
    def get_secret(self, secretId: str, version: str)-> str:        
        pass
        