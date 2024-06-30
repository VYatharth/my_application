from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from app.schemas.LoginSchema import LoginRequestSchema
from app.schemas.UserSchema import UserRequestSchema, UserResponseSchema
from app.services.UserService import UserService
import google.generativeai as genai
import os




LoginRouter = APIRouter(
  tags=['login']
)

@LoginRouter.get("/health", response_model=bool)
def index():
    return  True

@LoginRouter.get("/models")
def index():
    key = os.getenv('API_KEY')
    genai.configure(api_key=key)
    
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content("Write a story about an elephant in 200 words")
    return  response.text

