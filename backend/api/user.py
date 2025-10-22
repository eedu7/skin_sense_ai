from typing import Annotated

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from core.database import get_async_session
from crud.user import create_user, login_user
from schemas.user import UserCreate, UserLogin, UserOut

router = APIRouter()


@router.post("/", response_model=UserOut)
async def register(
    data: UserCreate,
    session: Annotated[AsyncSession, Depends(get_async_session)],
):
    return await create_user(session=session, email=data.email, password=data.password)


@router.post("/login", response_model=UserOut | None)
async def login(
    data: UserLogin,
    session: Annotated[AsyncSession, Depends(get_async_session)],
):
    return await login_user(session=session, email=data.email, password=data.password)
