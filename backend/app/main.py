"""FastAPI application entry point."""
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config.settings import settings
from app.config.database import engine, Base
from app.models.schemas import HealthResponse, ExampleResponse
from app.services.example import ExampleService


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Lifespan context manager for startup and shutdown events."""
    # Startup
    async with engine.begin() as conn:
        # Create tables (in production, use Alembic migrations)
        await conn.run_sync(Base.metadata.create_all)
    yield
    # Shutdown
    await engine.dispose()


app = FastAPI(
    title="Marraqueta API",
    description="FastAPI microservice",
    version="1.0.0",
    lifespan=lifespan,
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health", response_model=HealthResponse, tags=["health"])
async def health_check() -> HealthResponse:
    """Health check endpoint."""
    return HealthResponse(status="healthy")


@app.get("/", response_model=ExampleResponse, tags=["example"])
async def root() -> ExampleResponse:
    """Root endpoint example."""
    service = ExampleService()
    return service.get_example()


@app.get("/example/{item_id}", response_model=ExampleResponse, tags=["example"])
async def get_example(item_id: int) -> ExampleResponse:
    """Example endpoint with path parameter."""
    service = ExampleService()
    return service.get_example_by_id(item_id)

