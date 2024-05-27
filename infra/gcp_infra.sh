# create environment variables in cloud shell
export MY_REGION=us-central1 # us-east1
export MY_ZONE=us-central1-c # us-east1-c
export MY_CLUSTER=my-app-cluster
export MY_NETWORK=my-app-network
export PROJECT_ID=$(gcloud config get-value project)
export PROJECT_NUMBER=$(gcloud projects describe $PROJECT_ID --format='value(projectNumber)')
gcloud config set compute/region $MY_REGION
gcloud config set compute/zone $MY_ZONE


# Create custom mode VPC 
# Not sure it should be private or public
gcloud compute networks create my-app-network --subnet-mode=custom

#  create subnet - can be avoided as well, since when you enable IP aliases in, you let Kubernetes Engine automatically create a subnetwork for you.
gcloud compute networks subnets create my-app-subnet \
    --network=my-app-network \
    --range 10.0.4.0/22 \
    --enable-private-ip-google-access \
    --region=$MY_REGION \
    --secondary-range my-svc-range=10.0.32.0/20,my-pod-range=10.4.0.0/14

    # #Create firewall rules to allow SSH, ICMP, and RDP ingress traffic to VM instances (May not be needed for my app)
    # gcloud compute firewall-rules create my-app-allow-icmp-ssh-rdp --direction=INGRESS --priority=1000 --network=$MY_NETWORK --action=ALLOW --rules=icmp,tcp:22,tcp:3389 --source-ranges=0.0.0.0/0


# Create a Docker repository in Artifact Registry - https://cloud.google.com/build/docs/build-push-docker-image#create_a_docker_repository_in 
gcloud artifacts repositories create quickstart-docker-repo --repository-format=docker \
    --location=us-west2 --description="Docker repository"


# create private cluster with custom subnet
# gcloud beta container clusters create my-app-cluster \
gcloud container clusters create my-app-cluster \
    --enable-private-nodes \
    --enable-ip-alias \
    --master-ipv4-cidr 172.16.0.32/28 \
    --network=$MY_NETWORK \
    --subnetwork my-app-subnet \
    --services-secondary-range-name my-svc-range \
    --cluster-secondary-range-name my-pod-range \
    --num-nodes=2 \
    --machine-type="e2-medium" \
    --monitoring=NONE \
    --logging=NONE \
    --cluster-dns=clouddns \
    --cluster-dns-scope=cluster \
    --zone=$MY_ZONE \
    # --enable-private-endpoint \  # https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#all_access 
    # --service-account="my service account" \

# Create node pool
    # If you receive an error that no preemptible instances are available, you can remove the --preemptible option to proceed
gcloud container node-pools create "my-app-node-pool-1" \
    --cluster=$MY_CLUSTER --zone=$MY_ZONE \
    --machine-type "e2-medium" \
    --num-nodes "2" --node-labels=temp=true --preemptible
#  list only the nodes with the temp=true label
kubectl get nodes -l temp=true


# Enable master authorized network
    # create a compute instance
    gcloud compute instances create my-app-source-instance --zone=$MY_ZONE  \
    --network=my-app-network \
    --subnet my-app-subnet \
    --scopes 'https://www.googleapis.com/auth/cloud-platform'
    # get IP of instance
    gcloud compute instances describe my-app-source-instance --zone=$MY_ZONE | grep natIP

    gcloud container clusters update my-app-cluster \
        --enable-master-authorized-networks \
        --master-authorized-networks [natIP of above command/32]

        # SSH into the instance then install kubectl
        sudo apt-get install kubectl
        sudo apt-get install google-cloud-sdk-gke-gcloud-auth-plugin
        gcloud container clusters get-credentials my-app-cluster --zone=$MY_ZONE

        kubectl get nodes --output wide

    # OR

    # TO connect to cluster from cloud shell
    # authorize cloud shell IP (only works when --enable-private-endpoint is not enabled)
    curl ifconfig.me
    # configure authorized network and then run
    gcloud container clusters get-credentials my-app-cluster

    kubectl scale deployment --replicas=0 kube-dns-autoscaler --namespace=kube-system
    kubectl scale deployment --replicas=0 kube-dns --namespace=kube-system



# CI/CD
    # enable the APIs
    gcloud services enable container.googleapis.com \
    cloudbuild.googleapis.com \
    sourcerepo.googleapis.com \
    artifactregistry.googleapis.com \
    secretmanager.googleapis.com

    # Create helm repo 
        helm version

    # create docker repo - https://cloud.google.com/artifact-registry/docs/helm/store-helm-charts
        gcloud artifacts repositories create my-app-helm-repo --repository-format=docker \
            --location=$MY_REGION --description="Helm repository"


        gcloud artifacts repositories create my-app-be-docker-repo --repository-format=docker \
        --location=$MY_REGION --description="Docker repository" \
        --project=$PROJECT_ID

         gcloud artifacts repositories create my-app-fe-docker-repo --repository-format=docker \
        --location=$MY_REGION --description="Docker repository" \
        --project=$PROJECT_ID

        gcloud artifacts repositories list
    
    # Create cloud build
        # connect to github repo - Follow the instructions here -https://cloud.google.com/build/docs/automating-builds/github/connect-repo-github#connecting_a_github_host)
            CLOUD_BUILD_SERVICE_AGENT="service-${PROJECT_NUMBER}@gcp-sa-cloudbuild.iam.gserviceaccount.com"

            gcloud projects add-iam-policy-binding ${PROJECT_ID} \
            --member="serviceAccount:${CLOUD_BUILD_SERVICE_AGENT}" \
            --role="roles/secretmanager.admin"

            gcloud builds connections create github my-app-connection --region=$MY_REGION

            gcloud builds connections describe my-app-connection --region=$MY_REGION

            # add a GitHub repository to your connection - https://cloud.google.com/build/docs/automating-builds/github/connect-repo-github?generation=2nd-gen#connecting_a_github_repository_2 
            gcloud builds repositories create my-app-git-repo \
            --remote-uri=https://github.com/VYatharth/my_application.git \
            --connection=my-app-connection --region=$MY_REGION

        # create trigger for github repo - https://cloud.google.com/build/docs/automating-builds/github/build-repos-from-github?generation=2nd-gen
        gcloud builds triggers create github \
        --name=my-app-github-trigger \
        --repository=projects/$PROJECT_ID/locations/$MY_REGION/connections/my-app-connection/repositories/my-app-git-repo \
        --branch-pattern=^develop$ \
        --build-config=cloudbuild.yaml \
        --region=$MY_REGION
        

    # Grant appropriate role to the cloud build service account
        # Grant the registry writer role to the Cloud Build service account: 
        gcloud artifacts repositories add-iam-policy-binding my-app-helm-repo \
            --location=us-central1 --member=serviceAccount:$PROJECT_NUMBER@cloudbuild.gserviceaccount.com \
            --role=roles/artifactregistry.writer

        gcloud artifacts repositories add-iam-policy-binding my-app-be-docker-repo \
            --location=us-central1 --member=serviceAccount:$PROJECT_NUMBER@cloudbuild.gserviceaccount.com \
            --role=roles/artifactregistry.writer

        gcloud artifacts repositories add-iam-policy-binding my-app-fe-docker-repo \
            --location=us-central1 --member=serviceAccount:$PROJECT_NUMBER@cloudbuild.gserviceaccount.com \
            --role=roles/artifactregistry.writer
     




# # create a custom security role to access cloud storage

#     # role config - put it in a yaml file
#     title: "orca_storage_editor_196"
#     description: "orca_storage_editor_196"
#     stage: "ALPHA"
#     includedPermissions:
#     - storage.buckets.get      
#     - storage.objects.get
#     - storage.objects.list
#     - storage.objects.update
#     - storage.objects.create

#     gcloud iam roles create orca_storage_editor_196 --project qwiklabs-gcp-00-8051f9ee03bc --file role-definition.yaml

# # Create service account to allow GKE to access cloud storage
# gcloud iam service-accounts create orca-private-cluster-408-sa --display-name "my service account"
# # Bind the custom security role to service account
# gcloud projects add-iam-policy-binding qwiklabs-gcp-00-8051f9ee03bc --member serviceAccount:orca-private-cluster-408-sa@qwiklabs-gcp-00-8051f9ee03bc.iam.gserviceaccount.com --role projects/qwiklabs-gcp-00-8051f9ee03bc/roles/orca_storage_editor_196

