"""API tests."""
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_health_check() -> None:
    """Test health check endpoint."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "healthy"}


def test_root() -> None:
    """Test root endpoint."""
    response = client.get("/")
    assert response.status_code == 200
    data = response.json()
    assert "message" in data
    assert data["message"] == "Hello from Marraqueta API"


def test_get_example() -> None:
    """Test example endpoint with path parameter."""
    response = client.get("/example/123")
    assert response.status_code == 200
    data = response.json()
    assert "message" in data
    assert "item_id" in data
    assert data["item_id"] == 123

