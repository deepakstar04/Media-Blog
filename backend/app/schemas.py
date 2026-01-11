from pydantic import BaseModel
from datetime import datetime

class UserCreate(BaseModel):
    name: str
    email: str
    password: str


class UserOut(BaseModel):
    id: int
    name: str
    email: str

    class Config:
        from_attributes = True


class BlogCreate(BaseModel):
    title: str
    content: str


class BlogOut(BaseModel):
    id: int
    title: str
    content: str
    created_at: datetime
    author: UserOut

    class Config:
        from_attributes = True
