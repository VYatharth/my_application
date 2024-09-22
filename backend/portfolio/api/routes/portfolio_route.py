from typing import Any, Dict, List
from fastapi import APIRouter, Depends, HTTPException, UploadFile, status

from portfolio.common.models.portfolio_details import PortfolioDetails


router = APIRouter(
  tags=['portfolio']
)

@router.get("/portfolio")
def portfolio() -> PortfolioDetails:
    get_key_and_configure_genai()
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content("Write a story about an elephant in 200 words")
    print(response.text)
    return  response.text
