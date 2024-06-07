from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from app.schemas.LoginSchema import LoginRequestSchema
from app.schemas.UserSchema import UserRequestSchema, UserResponseSchema
from app.services.UserService import UserService

LoginRouter = APIRouter(
  tags=['login']
)

@LoginRouter.get("/health", response_model=bool)
def index():
    return  True

