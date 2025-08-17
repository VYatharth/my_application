from collections.abc import Generator

import pytest
from fastapi.testclient import TestClient
from my_app.main import app


@pytest.fixture(scope="module")
def client() -> Generator[TestClient, None, None]:
    with TestClient(app) as c:
        yield c
