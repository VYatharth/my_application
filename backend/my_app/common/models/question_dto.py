from pydantic import BaseModel, Field


class ArticleDto(BaseModel):
    article: str = Field(
        title="The text which need to be queried", max_length=10000
    )
   

