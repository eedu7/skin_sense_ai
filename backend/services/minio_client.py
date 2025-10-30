from minio import Minio
from core.config import config


class MinioClient:
    def __init__(self) -> None:
        self.client = Minio(
            endpoint=config.MINIO_ENDPOINT,
            access_key=config.MINIO_ACCESS_KEY,
            secret_key=config.MINIO_SECRET_KEY,
        )
