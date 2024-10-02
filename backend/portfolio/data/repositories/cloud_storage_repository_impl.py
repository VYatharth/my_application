from portfolio.domain.repository_interfaces.storage_repository import StorageRepository
from google.cloud import storage

class CloudStorageRepositoryImpl(StorageRepository):
    def upload_blob(self, bucket_name: str, destination_blob_name: str, content: str):
        storage_client = storage.Client()
        bucket = storage_client.bucket(bucket_name)
        blob = bucket.blob(destination_blob_name)
        # TODO: make these calls async using - https://pypi.org/project/gcloud-aio-storage/ 
        blob.upload_from_string(content)
    
    
    def download_blob_into_memory(self, bucket_name: str, blob_name: str) -> any:
        """Downloads a blob into memory."""
        
        storage_client = storage.Client()

        bucket = storage_client.bucket(bucket_name)

        blob = bucket.blob(blob_name)
        contents = blob.download_as_bytes()

        return contents
    
    
    