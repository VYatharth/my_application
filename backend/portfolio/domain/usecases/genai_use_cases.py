

from typing import BinaryIO
from portfolio.domain.repository_interfaces.file_repository import FileRepository
from portfolio.domain.repository_interfaces.storage_repository import StorageRepository
from portfolio.domain.repository_interfaces.genai_repository import GenaiRepository
from portfolio.common.configs.settings import settings


def configure_genai_use_case(repo: GenaiRepository, key: str ) -> str:
    return repo.configure_genai(key)

def generate_content_use_case(repo: GenaiRepository, prompt: str ) -> str:
    return repo.generate_content(prompt)

async def process_file_use_case(genai_repo: GenaiRepository, file_repo: FileRepository, storage_repo: StorageRepository , file: BinaryIO, key:str ) -> str:
    try:
        raw_text = file_repo.get_file_text(file)
        text_chunks = genai_repo.get_text_chunks(raw_text)
        serialized_vector_store = await genai_repo.get_serialized_vector_store(text_chunks, key)
        storage_repo.upload_blob(settings.QUESTION_BUCKET, settings.BLOB_BASE_NAME, serialized_vector_store)
        
    except Exception as e:
        # logger.error(e)
        raise e
    
async def query_document_use_case(genai_repo: GenaiRepository, storage_repo: StorageRepository , question: str, genai_key:str ) -> str:
    try:
        serialized_vector_store = storage_repo.download_blob_into_memory(settings.QUESTION_BUCKET, settings.BLOB_BASE_NAME)
        return genai_repo.query_document(question, genai_key, serialized_vector_store) 

    except Exception as e:
        # logger.error(e)
        raise e

