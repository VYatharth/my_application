from abc import ABC, abstractmethod
from portfolio.common.models.portfolio_dto import PortfolioDto
from portfolio.domain.entities.portfolio.portfolio_entity import Portfolio_Entity


class PortfolioRepository(ABC):
    @abstractmethod
    def get_portfolio(self) -> PortfolioDto:
        pass