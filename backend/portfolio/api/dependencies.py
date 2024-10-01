
import os
from portfolio.domain.usecases.genai_use_cases import configure_genai_use_case
from portfolio.domain.usecases.secret_manager_use_cases import get_secret
from portfolio.data.repositories.secret_manager_repository_impl import SecretManagerRepositoryImpl
from portfolio.domain.repository_interfaces.secret_manager_repository import SecretManagerRepository
from portfolio.data.repositories.genai_repository_impl import GenaiRepositoryImpl
from portfolio.domain.repository_interfaces.genai_repository import GenaiRepository
from portfolio.data.repositories.portfolio_repository_impl import PortfolioRepositoryImpl
from portfolio.domain.repository_interfaces.portfolio_repository import PortfolioRepository
from portfolio.domain.repository_interfaces.portfolio_repository import PortfolioRepository
from portfolio.common.configs.settings import settings


def get_portfolio_repository() -> PortfolioRepository:
    return PortfolioRepositoryImpl()

def get_genai_repository() -> GenaiRepository:
    return GenaiRepositoryImpl()

def get_secret_manager_repository() -> SecretManagerRepository:
    return SecretManagerRepositoryImpl()


    

def get_key_and_configure_genai():
    key = ''
    if settings.ENVIRONMENT == "local":
        key = os.getenv('API_KEY')
    else:
        key = get_secret(get_secret_manager_repository(), settings.SECRET_ID, settings.SECRET_VERSION)
    configure_genai_use_case(get_genai_repository(), key)
    
    