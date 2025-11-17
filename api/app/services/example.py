"""Example service layer for business logic."""
from app.models.schemas import ExampleResponse


class ExampleService:
    """Example service class."""

    def get_example(self) -> ExampleResponse:
        """Get example response."""
        return ExampleResponse(message="Hello from Marraqueta API")

    def get_example_by_id(self, item_id: int) -> ExampleResponse:
        """Get example response by ID."""
        return ExampleResponse(
            message=f"Hello from Marraqueta API - Item ID: {item_id}",
            item_id=item_id,
        )

