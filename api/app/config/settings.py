"""Application configuration."""
from pydantic import field_validator
from pydantic_settings import BaseSettings
from typing import List, Union


class Settings(BaseSettings):
    """Application settings."""

    APP_NAME: str = "Marraqueta API"
    DEBUG: bool = False
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    CORS_ORIGINS: Union[str, List[str]] = ["*"]
    
    # Database settings
    DATABASE_URL: str = "postgresql+asyncpg://marraqueta:marraqueta@localhost:5432/marraqueta"

    @field_validator("CORS_ORIGINS", mode="before")
    @classmethod
    def parse_cors_origins(cls, v: Union[str, List[str]]) -> List[str]:
        """Parse CORS_ORIGINS from string or list."""
        if isinstance(v, str):
            if v == "*":
                return ["*"]
            # Handle comma-separated string
            return [origin.strip() for origin in v.split(",")]
        return v

    class Config:
        """Pydantic config."""

        env_file = ".env"
        case_sensitive = True


settings = Settings()

