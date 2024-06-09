from typing import List
from fastapi import APIRouter, Depends, status
from app.schemas.UserSchema import UserRequestSchema, UserResponseSchema
from app.services.UserService import UserService

UserRouter = APIRouter(
  prefix='/users',
  tags=['user']
)


@UserRouter.get("/", response_model=List[UserResponseSchema])
def index(
    userService: UserService = Depends(),
):
    return  userService.list()


@UserRouter.get("/{id}", response_model=UserResponseSchema)
def get(id: int, userService: UserService = Depends()):
    return userService.get(id)

@UserRouter.post(
    "/",
    response_model=UserResponseSchema,
    status_code=status.HTTP_201_CREATED,
)
def create(
    user: UserRequestSchema,
    userService: UserService = Depends(),
):
    return userService.create(user)


@UserRouter.patch("/{id}", response_model=UserResponseSchema)
def update(
    id: int,
    user: UserRequestSchema,
    userService: UserService = Depends(),
):
    return userService.update(id, user)


@UserRouter.delete(
    "/{id}", status_code=status.HTTP_200_OK
)
def delete(
    id: int, userService: UserService = Depends()
):
    userService.delete(id)
    return "user deleted successfully"
