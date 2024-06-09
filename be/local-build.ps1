# Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# Exit in case of error
$ErrorActionPreference = "Stop"

# Build the Docker image
docker build -t user-app .

# Tag the Docker image
docker tag user-app vyathartha/user-app:latest

# Push the Docker image to Docker Hub
docker push vyathartha/user-app:latest

