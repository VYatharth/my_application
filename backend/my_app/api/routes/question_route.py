from typing import Annotated
from fastapi import APIRouter, Body, Depends, Form, HTTPException, Request
from my_app.common.models.question_dto import QueryTextDto
from my_app.domain.repository_interfaces.file_repository import FileRepository
from my_app.domain.repository_interfaces.storage_repository import StorageRepository
from my_app.domain.usecases.genai_use_cases import generate_content_use_case, process_text_use_case, query_document_use_case
from my_app.domain.repository_interfaces.genai_repository import GenaiRepository
from my_app.api.dependencies import get_file_repository, get_genai_repository, get_storage_repository
from fastapi import APIRouter


router = APIRouter()


@router.get("/models")
def models(genai_repository: Annotated[GenaiRepository, Depends(get_genai_repository)]) -> str:
    content = generate_content_use_case(genai_repository, "Write a story about a tiger in 200 words")
    return  content
    
  
@router.post("/processtext")
def upload_files(article_dto: QueryTextDto, request: Request, genai_repository: Annotated[GenaiRepository, Depends(get_genai_repository)], storage_repository: Annotated[StorageRepository, Depends(get_storage_repository)], file_repository: Annotated[FileRepository, Depends(get_file_repository)]) -> str:
    print(article_dto)
    if article_dto.text_content:
        try:
            process_text_use_case(article_dto.text_content, genai_repository, storage_repository, request.app.state.genai_key)
        except:
            raise HTTPException(status_code=500, detail="Error in processing text")
    else:
        return 'Empty text'
    return  'text processed successfully'


@router.post("/query", response_model=str)
def query(query: Annotated[str, Body(embed=True)], request: Request, genai_repository: Annotated[GenaiRepository, Depends(get_genai_repository)], storage_repository: Annotated[StorageRepository, Depends(get_storage_repository)]) -> str :
    if query:
        try:
            result = query_document_use_case(genai_repository, storage_repository, query, request.app.state.genai_key) 
        
            return result
        except:
            raise HTTPException(status_code=500, detail="Error in querying document")
    
    return 'Empty question'
        
    











   

    



