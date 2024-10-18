from pydantic import BaseModel, Field


class QueryTextDto(BaseModel):
    text_content: str = Field(
        title="The text which need to be queried", max_length=10000
    )
   

