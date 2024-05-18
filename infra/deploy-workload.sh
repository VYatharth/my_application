
# Create namespace (if needed)
kubectl create namespace team-a
# To use it we can either use --namespace flag with each command or set the namespace in context like this
kubectl config set-context --current --namespace=team-a

# Create the deployment based on the configuration file:
kubectl apply -f ../manifests/deployment-be.yaml --namespace=team-a

# Create service
kubectl apply -f ../manifests/be-svc.yaml

# Deploy ingress
kubectl apply -f ../manifests/ingress.yaml
