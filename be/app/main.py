from fastapi import FastAPI
from app.models.BaseModel import init
from app.routers.LoginRouter import LoginRouter
from app.routers.UserRouter import UserRouter
from app.metadata.Tags import Tags
from app.configs.Environment import get_environment_variables
from starlette.middleware.cors import CORSMiddleware

# Application Environment Configuration
env = get_environment_variables()

# Core Application Instance
app = FastAPI(
    title=env['APP_NAME'],
    openapi_tags=Tags,
    root_path=env['ROOT_PATH']
)

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=[
#         'http://localhost','http://localhost:5173'
#     ],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

@app.get("/")
def index():
    return  'navigate to /docs route for open API spec'

app.include_router(UserRouter)
app.include_router(LoginRouter)

# Initialise Data Model Attributes
init()