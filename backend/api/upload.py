from fastapi import APIRouter, File, UploadFile, HTTPException, status
from typing import List
from core.config import config
from minio import Minio
from minio.error import S3Error
from io import BytesIO

router = APIRouter()

minio_client = Minio(
    endpoint=config.MINIO_ENDPOINT,
    access_key=config.MINIO_ACCESS_KEY,
    secret_key=config.MINIO_SECRET_KEY,
    secure=config.MINIO_USE_SSL,
)

if not minio_client.bucket_exists(config.MINIO_BUCKET_NAME):
    minio_client.make_bucket(config.MINIO_BUCKET_NAME)


@router.post("/uploadfiles/")
async def upload_files(files: List[UploadFile] = File(...)):
    uploaded_files: List = []

    for file in files:
        try:
            content = await file.read()
            file_stream = BytesIO(content)

            minio_client.put_object(
                bucket_name=config.MINIO_BUCKET_NAME,
                object_name=str(file.filename),
                data=file_stream,
                length=len(content),
                content_type=str(file.content_type),
            )
            uploaded_files.append(
                {
                    "filename": file.filename,
                    "content_type": file.content_type,
                    "size": len(content),
                    "url": f"{config.MINIO_ENDPOINT}/{config.MINIO_BUCKET_NAME}/{file.filename}",
                }
            )
        except S3Error as e:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e)
            )
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"Upload failed: {str(e)}",
            )

    return {"uploaded_files": uploaded_files, "success": True}
