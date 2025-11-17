"""Pydantic models for request/response validation."""
from pydantic import BaseModel, Field


class HealthResponse(BaseModel):
    """Health check response model."""

    status: str = Field(..., description="Service status", example="healthy")


class ExampleResponse(BaseModel):
    """Example response model."""

    message: str = Field(..., description="Response message", example="Hello from Marraqueta API")
    item_id: int | None = Field(None, description="Item ID", example=1)

