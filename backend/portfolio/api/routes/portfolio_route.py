from typing import Annotated
from fastapi import APIRouter, Depends

from portfolio.api.dependencies import get_portfolio_repository
from portfolio.common.models.portfolio_dto import PortfolioDto
from portfolio.domain.repository_interfaces.portfolio_repository import PortfolioRepository
from portfolio.domain.usecases.read_portfolio_use_case import (
  read_portfolio_use_case,
  )


router = APIRouter()

@router.get("/")
def portfolio(portfolio_repository: Annotated[PortfolioRepository, Depends(get_portfolio_repository)]) -> PortfolioDto:
    return  read_portfolio_use_case(portfolio_repository)
