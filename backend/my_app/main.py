from fastapi import FastAPI
from fastapi.routing import APIRoute
from my_app.api.dependencies import get_key_and_configure_genai
from my_app.common.configs.settings import settings
from starlette.middleware.cors import CORSMiddleware
from my_app.api.main import api_router
from contextlib import asynccontextmanager

# Core Application Instance
def custom_generate_unique_id(route: APIRoute) -> str:
    return f"{route.tags[0]}-{route.name}"

@asynccontextmanager
async def lifespan(app: FastAPI):
    get_key_and_configure_genai(app)
    yield

app = FastAPI(
    title=settings.APP_NAME,
    # openapi_url=f"{settings.API_V1_STR}/openapi.json",
    root_path=settings.ROOT_PATH,
    lifespan=lifespan,
)

# Set all CORS enabled origins
if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[
            str(origin).strip("/") for origin in settings.BACKEND_CORS_ORIGINS
        ],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

app.include_router(api_router)

@app.get("/")
def index():
    return "navigate to /docs route for open API spec"
