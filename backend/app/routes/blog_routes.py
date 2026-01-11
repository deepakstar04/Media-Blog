from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import Blog
from ..schemas import BlogCreate, BlogOut

router = APIRouter(prefix="/blogs", tags=["Blogs"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=BlogOut)
def create_blog(blog: BlogCreate, db: Session = Depends(get_db)):
    new_blog = Blog(title=blog.title, content=blog.content, author_id=1)
    db.add(new_blog)
    db.commit()
    db.refresh(new_blog)
    return new_blog


@router.get("/", response_model=list[BlogOut])
def get_blogs(db: Session = Depends(get_db)):
    return db.query(Blog).all()


@router.get("/{id}", response_model=BlogOut)
def get_blog(id: int, db: Session = Depends(get_db)):
    return db.query(Blog).filter(Blog.id == id).first()
