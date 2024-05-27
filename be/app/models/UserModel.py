from sqlalchemy import (
    Column,
    Integer,
    String,
)

from app.models.BaseModel import EntityMeta


class User(EntityMeta):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String)
    email = Column(String)
    password = Column(String)
