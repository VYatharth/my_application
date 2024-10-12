from fastapi import APIRouter
from my_app.api.routes import login, users, portfolio_route, question_route

api_router = APIRouter()
api_router.include_router(login.router, tags=["login"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(portfolio_route.router, prefix="/portfolio", tags=["portfolio"])
api_router.include_router(question_route.router, prefix="/question", tags=["question"])
# api_router.include_router(scan_pdf_route.router, prefix="/pdf", tags=["pdf"])
