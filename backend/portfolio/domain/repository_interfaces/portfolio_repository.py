from abc import ABC, abstractmethod
from portfolio.common.models.portfolio_dto import PortfolioDto


class PortfolioRepository(ABC):
    @abstractmethod
    def get_portfolio(self) -> PortfolioDto:
        pass