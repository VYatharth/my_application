import os
import pydantic_core
from portfolio.common.models.portfolio_dto import PortfolioDto
from portfolio.domain.repository_interfaces.portfolio_repository import PortfolioRepository


class PortfolioRepositoryImpl(PortfolioRepository):
    
    def get_portfolio(self) -> PortfolioDto:
        root_path = os.getcwd()
        # use Pydantic model and parse json into it
        with open(f"{root_path}/portfolio/data/resources/portfolio-data.json", 'r') as json_file:
            data = json_file.read()
            portfolio = PortfolioDto.model_validate(pydantic_core.from_json(data, allow_partial=True))
            return portfolio
