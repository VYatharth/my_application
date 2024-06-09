from typing import List
from fastapi import Depends
from sqlalchemy.orm import Session
from app.configs.Database import (
    get_db_connection,
)
from app.models.UserModel import User


class UserRepository:
    db: Session

    def __init__(
        self, db: Session = Depends(get_db_connection)
    ) -> None:
        self.db = db

    def list(self) -> List[User]:
        return self.db.query(User).all()

    def get(self, user: User) -> User:
        return self.db.get(
            User,
            user.id,
        )
    
    def getByEmail(self, user: User) -> User:
        return self.db.query(User).filter(User.email == user.email).first()

    def create(self, user: User) -> User:
        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)
        return user

    def update(self, id: int, user: User) -> User:
        user.id = id
        self.db.merge(user)
        self.db.commit()
        return user

    def delete(self, user: User) -> None:
        self.db.delete(user)
        self.db.commit()
        self.db.flush()
