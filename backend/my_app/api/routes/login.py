from fastapi import APIRouter
from fastapi import APIRouter

router = APIRouter(
  tags=['login']
)

# TODO: move to another router
@router.get("/health", response_model=bool)
def health():
    return  True


