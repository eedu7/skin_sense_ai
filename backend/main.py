from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.user import router as user_router
from api.upload import router as upload_router

app = FastAPI()
app.include_router(
    user_router, prefix="/users", tags=["Authentiction & User Management"]
)
app.include_router(upload_router, prefix="/upload", tags=["File Upload"])

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"],
    allow_origins=["*"],
)
