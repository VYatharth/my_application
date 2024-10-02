from typing import BinaryIO
from PyPDF2 import PdfReader

from portfolio.domain.repository_interfaces.file_repository import FileRepository

class PdfFileRepositoryImpl(FileRepository):
    def get_file_text(self, file: BinaryIO)-> str:
        text=""
        pdf_reader= PdfReader(file)
        for page in pdf_reader.pages:
            text+= page.extract_text()
        
        return  text
    
    
    
    
    
    