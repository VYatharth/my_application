

from my_app.domain.repository_interfaces.secret_manager_repository import SecretManagerRepository


def get_secret(repo: SecretManagerRepository, secretId: str, version: str ) -> str:
    return repo.get_secret(secretId, version)
