from typing import Any
from pydantic import BaseModel


class PortfolioDetails(BaseModel):
    personal_details: Any
    skills: Any
    achievements: Any
    experience: Any
    activities: Any
    contact_info: Any