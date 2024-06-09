
# Create namespace (if needed)
kubectl create namespace my-app-ns
# To use it we can either use --namespace flag with each command or set the namespace in context like this
kubectl config set-context --current --namespace=my-app-ns

# Create the deployment based on the configuration file:
kubectl apply -f ../manifests/deployment-be.yaml --namespace=my-app-ns

# Create service
kubectl apply -f ../manifests/be-svc.yaml

# Deploy ingress
kubectl apply -f ../manifests/ingress.yaml


# ---------------- USING HELM ------------------------------------------
git clone https://github.com/VYatharth/my_application.git
cd my_application/infra/k8s
git switch -c develop origin/develop

# Install helm - https://helm.sh/docs/intro/install/ 
# Install helm chart from package in OCI registry - https://helm.sh/docs/topics/registries/

# Pull the packaged chart
    # helm pull oci://us-central1-docker.pkg.dev/my-app-424608/my-app-helm-repo/my-app --version 0.1.0
    # helm template myrelease oci://us-central1-docker.pkg.dev/my-app-424608/my-app-helm-repo/my-app --version 0.1.0
    helm upgrade --install --atomic my-app-release oci://us-central1-docker.pkg.dev/my-app-424608/my-app-helm-repo/my-app --version 0.1.0 --dry-run


    helm pull bitnami/mysql 
    might need more steps to pull from my repository https://docs.google.com/document/d/1dyYB0SRvaKGH2FGy_zVteEeXq3CDweth-4WqwOqOoC4/edit#heading=h.mcxdgjajqcou

# Install a package/chart
    helm upgrade --install --atomic my-app-release ./helm --values ./helm/values.yaml --dry-run




