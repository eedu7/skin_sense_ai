from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from models import User
from utils.password import Password


async def create_user(
    session: AsyncSession,
    email: str,
    password: str,
) -> User:
    hashed_password = Password.hash_password(password)

    new_user = User(
        email=email,
        password=hashed_password,
    )
    session.add(new_user)
    await session.commit()
    await session.refresh(new_user)
    return new_user


async def login_user(
    session: AsyncSession,
    email: str,
    password: str,
) -> User | None:
    stmt = select(User).where(User.email == email)
    result = await session.execute(stmt)
    user = result.scalar_one_or_none()
    if user and Password.verify_password(password, user.password):
        return user
    return None
