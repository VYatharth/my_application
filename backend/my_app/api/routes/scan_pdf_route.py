from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException, Request

from my_app.domain.repository_interfaces.file_repository import FileRepository
from my_app.domain.repository_interfaces.storage_repository import StorageRepository
from my_app.domain.usecases.genai_use_cases import generate_content_use_case, process_file_use_case
from my_app.domain.repository_interfaces.genai_repository import GenaiRepository
from my_app.api.dependencies import get_file_repository, get_genai_repository, get_storage_repository
from fastapi import APIRouter, UploadFile


router = APIRouter()


@router.get("/models")
def models(genai_repository: Annotated[GenaiRepository, Depends(get_genai_repository)]) -> str:
    content = generate_content_use_case(genai_repository, "Write a story about a tiger in 200 words")
    return  content
    
  
@router.post("/uploadfiles")
def upload_files(upload_files: list[UploadFile], request: Request, genai_repository: Annotated[GenaiRepository, Depends(get_genai_repository)], storage_repository: Annotated[StorageRepository, Depends(get_storage_repository)], file_repository: Annotated[FileRepository, Depends(get_file_repository)]) -> str:
    if upload_files:
        try:
            process_file_use_case(genai_repository, file_repository, storage_repository, upload_files[0].file, request.app.state.genai_key)
        except:
            raise HTTPException(status_code=500, detail="Error in parsing file")
    else:
        return 'No file'
    return  'file parsed and uploaded successfully'

        
    











   

    



