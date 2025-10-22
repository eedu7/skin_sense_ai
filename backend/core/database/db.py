from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase

from core.config import config

engine = create_async_engine(config.DATABASE_URL, echo=True, future=True)
ASYNC_SESSION_LOCAL = async_sessionmaker(bind=engine, expire_on_commit=False)


class Base(DeclarativeBase):
    pass


async def get_async_session():
    async with ASYNC_SESSION_LOCAL() as session:
        yield session
