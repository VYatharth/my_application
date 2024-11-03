
from my_app.domain.repository_interfaces.secret_manager_repository import SecretManagerRepository
from my_app.common.configs.settings import settings
from google.cloud import secretmanager
import google_crc32c


class SecretManagerRepositoryImpl(SecretManagerRepository):
    

    def get_secret(self, secretId: str, version: str)-> str:        
        """
        Access the payload for the given secret version if one exists. The version
        can be a version number as a string (e.g. "5") or an alias (e.g. "latest").
        """

        # Create the Secret Manager client.
        client = secretmanager.SecretManagerServiceClient()

        # Build the resource name of the secret version.
        secret_name = f"projects/{settings.PROJECT_ID}/secrets/{secretId}/versions/{version}"

        # Access the secret version.
        response = client.access_secret_version(request={"name": secret_name})

        # Verify payload checksum.
        crc32c = google_crc32c.Checksum()
        crc32c.update(response.payload.data)
        if response.payload.data_crc32c != int(crc32c.hexdigest(), 16):
            print("Data corruption detected.", response)

        return response.payload.data.decode("UTF-8")