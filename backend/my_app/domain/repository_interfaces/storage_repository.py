from abc import ABC, abstractmethod

class StorageRepository(ABC):
    @abstractmethod
    def upload_blob(self, bucket_name: str, destination_blob_name: str, content):
        pass
    
    @abstractmethod
    def download_blob_into_memory(self, bucket_name: str, blob_name: str) -> any:
        pass
    
    
    
    