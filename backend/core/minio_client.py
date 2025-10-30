from minio import Minio
from core.config import config

minio_client = Minio(
    endpoint=config.MINIO_ENDPOINT,
    access_key=config.MINIO_ACCESS_KEY,
    secret_key=config.MINIO_SECRET_KEY,
    secure=config.MINIO_USE_SSL,
)

# Create bucket if not exists
found = minio_client.bucket_exists(config.MINIO_BUCKET_NAME)
if not found:
    minio_client.make_bucket(config.MINIO_BUCKET_NAME)
