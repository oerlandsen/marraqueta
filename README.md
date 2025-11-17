# Marraqueta

FastAPI microservice with clean architecture, Pydantic models, Docker support, and comprehensive tooling.

## Features

- FastAPI web framework
- Pydantic for data validation
- Clean architecture (services, models, config layers)
- Docker and Docker Compose support
- Ruff for linting and formatting
- Pytest for testing
- Makefile for common operations

## Project Structure

```
marraqueta/
├── app/
│   ├── main.py              # FastAPI app with routes
│   ├── config/
│   │   └── settings.py      # Configuration management
│   ├── models/
│   │   └── schemas.py       # Pydantic models
│   └── services/
│       └── example.py       # Business logic layer
├── tests/
│   └── test_api.py          # API tests
├── Dockerfile
├── docker-compose.yml
├── Makefile
└── requirements.txt
```

## Quick Start

### Local Development

1. Install dependencies:
```bash
make install
```

2. Run the application:
```bash
make run
```

The API will be available at `http://localhost:8000`

### Docker

1. Build and start with Docker Compose:
```bash
make docker-build
make docker-up
```

2. View logs:
```bash
make docker-logs
```

3. Stop containers:
```bash
make docker-down
```

## Available Commands

- `make install` - Install Python dependencies
- `make run` - Run the application locally with hot reload
- `make lint` - Run Ruff linter
- `make format` - Format code with Ruff
- `make test` - Run tests
- `make docker-build` - Build Docker image
- `make docker-up` - Start Docker Compose services
- `make docker-down` - Stop Docker Compose services
- `make docker-logs` - View Docker logs
- `make clean` - Clean Python cache files

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /` - Root endpoint
- `GET /example/{item_id}` - Example endpoint with path parameter

## API Documentation

When running the application, visit:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Configuration

Configuration is managed through environment variables in `app/config/settings.py`. Create a `.env` file to override defaults:

```
DEBUG=false
HOST=0.0.0.0
PORT=8000
CORS_ORIGINS=["*"]
```

## Development

### Running Tests

```bash
make test
```

### Linting

```bash
make lint
```

### Formatting

```bash
make format
```

## License

MIT
