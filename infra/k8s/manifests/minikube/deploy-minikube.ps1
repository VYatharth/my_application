# Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# Exit in case of error
$ErrorActionPreference = "Stop"

# Create the deployment based on the configuration file:
kubectl apply -f ./backend/be.deployment.yaml
kubectl apply -f ./backend/be.service.yaml

# Create the deployment based on the configuration file:
kubectl apply -f ./frontend/fe.deployment.yaml
kubectl apply -f ./frontend/fe.service.yaml

# Create service
kubectl apply -f ./ingress.yaml