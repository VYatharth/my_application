from typing import List
from fastapi import APIRouter, Depends, status

router = APIRouter(
  prefix='/users',
  tags=['user']
)


# @router.get("/", response_model=List[UserResponseSchema])
# def index(
#     userService: UserService = Depends(),
# ):
#     return  userService.list()


# @router.get("/{id}", response_model=UserResponseSchema)
# def get(id: int, userService: UserService = Depends()):
#     return userService.get(id)

# @router.post(
#     "/",
#     response_model=UserResponseSchema,
#     status_code=status.HTTP_201_CREATED,
# )
# def create(
#     user: UserRequestSchema,
#     userService: UserService = Depends(),
# ):
#     return userService.create(user)


# @router.patch("/{id}", response_model=UserResponseSchema)
# def update(
#     id: int,
#     user: UserRequestSchema,
#     userService: UserService = Depends(),
# ):
#     return userService.update(id, user)


# @router.delete(
#     "/{id}", status_code=status.HTTP_200_OK
# )
# def delete(
#     id: int, userService: UserService = Depends()
# ) -> str:
#     userService.delete(id)
#     return "user deleted successfully"
