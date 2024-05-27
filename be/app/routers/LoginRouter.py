from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from app.schemas.LoginSchema import LoginRequestSchema
from app.schemas.UserSchema import UserRequestSchema, UserResponseSchema
from app.services.UserService import UserService

LoginRouter = APIRouter(
  prefix='/login',
  tags=['login']
)

@LoginRouter.post(
    "/"
)
def create(
    loginData: LoginRequestSchema,
    userService: UserService = Depends(),
):
    if userService.login(loginData):
        return "User logged-in successfully"
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail = "Invalid Email or Password")

