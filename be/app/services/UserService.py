
from typing import List
from fastapi import Depends, HTTPException, status
from app.models.UserModel import User
from app.repositories.UserRepository import UserRepository
from app.schemas.LoginSchema import LoginRequestSchema
from app.schemas.UserSchema import UserRequestSchema


class UserService:
    userRepository: UserRepository

    def __init__(
        self, userRepository: UserRepository = Depends()
    ) -> None:
        self.userRepository = userRepository

    def create(self, user_body: UserRequestSchema) -> User:
        return self.userRepository.create(
            User(username=user_body.username,email=user_body.email,password=user_body.password )
        )

    def delete(self, user_id: int) -> None:
        user = self.get(user_id)
        if user:
            return self.userRepository.delete(user)
        else:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)

    def get(self, user_id: int) -> User:
        return self.userRepository.get(
            User(id=user_id)
        )

    def list(self) -> List[User]:
        return self.userRepository.list()

    def update(
        self, user_id: int, user_body: UserRequestSchema
    ) -> User:
        return self.userRepository.update(
            user_id, User(username=user_body.username,email=user_body.email,password=user_body.password )
        )
    
    def login(self, login_body: LoginRequestSchema) -> bool:
        user = self.userRepository.getByEmail(
            User(email=login_body.email)
        )
        if user and user.password == login_body.password:
            return True
        
        return False

