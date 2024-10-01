from portfolio.domain.repository_interfaces.genai_repository import GenaiRepository
import google.generativeai as genai
from portfolio.common.configs.settings import settings

class GenaiRepositoryImpl(GenaiRepository):
    def configure_genai(self, key: str):        
        genai.configure(api_key=key)
    
    def generate_content(self, prompt: str) -> str:
        model = genai.GenerativeModel(settings.GEMINI_VERSION)
        response = model.generate_content(prompt)
        return  response.text
    
    