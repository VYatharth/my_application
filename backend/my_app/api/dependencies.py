
import os
from my_app.data.repositories.cloud_storage_repository_impl import CloudStorageRepositoryImpl
from my_app.data.repositories.pdf_file_repository_impl import PdfFileRepositoryImpl
from my_app.domain.repository_interfaces.file_repository import FileRepository
from my_app.domain.repository_interfaces.storage_repository import StorageRepository
from my_app.domain.usecases.genai_use_cases import configure_genai_use_case
from my_app.domain.usecases.secret_manager_use_cases import get_secret
from my_app.data.repositories.secret_manager_repository_impl import SecretManagerRepositoryImpl
from my_app.domain.repository_interfaces.secret_manager_repository import SecretManagerRepository
from my_app.data.repositories.genai_repository_impl import GenaiRepositoryImpl
from my_app.domain.repository_interfaces.genai_repository import GenaiRepository
from my_app.data.repositories.portfolio_repository_impl import PortfolioRepositoryImpl
from my_app.domain.repository_interfaces.portfolio_repository import PortfolioRepository
from my_app.domain.repository_interfaces.portfolio_repository import PortfolioRepository
from my_app.common.configs.settings import settings
from fastapi import FastAPI


def get_portfolio_repository() -> PortfolioRepository:
    return PortfolioRepositoryImpl()

def get_genai_repository() -> GenaiRepository:
    return GenaiRepositoryImpl()

def get_file_repository() -> FileRepository:
    return PdfFileRepositoryImpl()

def get_storage_repository() -> StorageRepository:
    return CloudStorageRepositoryImpl()

def get_secret_manager_repository() -> SecretManagerRepository:
    return SecretManagerRepositoryImpl()


    

def get_key_and_configure_genai(app: FastAPI):
    key = ''
    if settings.ENVIRONMENT == "local":
        key = os.getenv('API_KEY')
    else:
        key = get_secret(get_secret_manager_repository(), settings.SECRET_ID, settings.SECRET_VERSION)
    app.state.genai_key = key
    configure_genai_use_case(get_genai_repository(), key)
    
    