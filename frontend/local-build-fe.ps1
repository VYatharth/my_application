# Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# Exit in case of error
$ErrorActionPreference = "Stop"

# Build the Docker image
docker build -t my-app-fe .

# Tag the Docker image
docker tag my-app-fe vyathartha/my-app-fe:latest

# Push the Docker image to Docker Hub
docker push vyathartha/my-app-fe:latest

