.PHONY: install run lint format test docker-build docker-up docker-down docker-logs clean db-shell db-reset

install:
	pip install -r requirements.txt

run:
	uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

lint:
	ruff check app tests

format:
	ruff format app tests

test:
	pytest tests/ -v

docker-build:
	docker-compose build

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down

docker-logs:
	docker-compose logs -f

db-shell:
	docker-compose exec db psql -U marraqueta -d marraqueta

db-reset:
	docker-compose down -v
	docker-compose up -d db
	sleep 5
	docker-compose up -d

clean:
	find . -type d -name __pycache__ -exec rm -r {} +
	find . -type f -name "*.pyc" -delete
	find . -type f -name "*.pyo" -delete
	find . -type d -name ".pytest_cache" -exec rm -r {} +
	find . -type d -name ".ruff_cache" -exec rm -r {} +

