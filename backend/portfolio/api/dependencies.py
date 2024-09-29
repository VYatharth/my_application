
from portfolio.data.repositories.portfolio_repository_impl import PortfolioRepositoryImpl
from portfolio.domain.repository_interfaces.portfolio_repository import PortfolioRepository


def get_portfolio_repository() -> PortfolioRepository:
    return PortfolioRepositoryImpl()

