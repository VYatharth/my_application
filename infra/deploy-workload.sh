

# manual deployment using manifests 

    # clone repo in shell
    git clone https://github.com/VYatharth/my_application.git
    cd my_application/infra/k8s
    git switch -c develop origin/develop

    # Note: the manifest files may not be up to date, would be better to generate manifests on the fly using helm dry run utility
    # Create the deployment based on the configuration file:
    kubectl apply -f ../manifests/deployment-be.yaml --namespace=my-app-ns

    # Create service
    kubectl apply -f ../manifests/be-svc.yaml

    # Deploy ingress
    kubectl apply -f ../manifests/ingress.yaml


# ---------------- USING HELM ------------------------------------------

# Optional
    # Create namespace (if needed)
        # kubectl create namespace my-app-ns
        # kubectl config set-context --current --namespace=my-app-ns

    # Install helm - https://helm.sh/docs/intro/install/ 


# Install helm chart from package from OCI registry - https://helm.sh/docs/topics/registries/
# Pull and install the packaged chart
    helm pull oci://us-central1-docker.pkg.dev/my-app-424608/my-app-helm-repo/my-app --version 0.1.0
    helm upgrade --install --atomic my-app-release ./helm --values ./helm/values.yaml --dry-run

#directly install without pulling

    # helm template myrelease oci://us-central1-docker.pkg.dev/my-app-424608/my-app-helm-repo/my-app --version 0.1.0
    helm upgrade --install --atomic my-app-release oci://us-central1-docker.pkg.dev/my-app-424608/my-app-helm-repo/my-app --version 0.4.0 --dry-run

    



    

