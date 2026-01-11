from fastapi import FastAPI
from .database import Base, engine
from .routes import auth_routes, blog_routes

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Medium Style Blog API")

app.include_router(auth_routes.router)
app.include_router(blog_routes.router)
