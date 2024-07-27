# create environment variables in cloud shell
export MY_REGION=us-central1
export MY_ZONE=us-central1-c
export MY_CLUSTER=my-app-cluster
export MY_NETWORK=my-app-network
export SECRET1_NAME=gg-secret
export QUESTION_BUCKET=question-bucket
export MY_NAMESPACE=my-app-ns
export BE_SERVICE_ACCOUNT=my-app-be-k8s-sa
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
    --workload-pool=$PROJECT_ID.svc.id.goog
    # --enable-private-endpoint \  # https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#all_access 
    # --service-account="my service account" \

    # For updating an existing cluster
        # gcloud container clusters update $MY_CLUSTER \
        # --location=LOCATION \
        # --workload-pool=PROJECT_ID.svc.id.goog

# Create node pool
    # If you receive an error that no preemptible instances are available, you can remove the --preemptible option to proceed
gcloud container node-pools create "my-app-node-pool-1" \
    --cluster=$MY_CLUSTER --zone=$MY_ZONE \
    --machine-type "e2-medium" \
    --num-nodes "2" --node-labels=temp=true --preemptible \
    --disk-type pd-standard \
    --disk-size 25 \
    --workload-metadata=GKE_METADATA

    # After creating new pool delete the old pool manually




# Enable master authorized network
    # To connect from a compute instance
        # create a compute instance
        gcloud compute instances create my-app-source-instance --zone=$MY_ZONE  \
        --network=my-app-network \
        --subnet my-app-subnet \
        --scopes 'https://www.googleapis.com/auth/cloud-platform'
        # get IP of instance
        gcloud compute instances describe my-app-source-instance --zone=$MY_ZONE | grep natIP

        # SSH into the instance then install kubectl
        sudo apt-get install kubectl
        sudo apt-get install google-cloud-sdk-gke-gcloud-auth-plugin
        gcloud container clusters get-credentials my-app-cluster --zone=$MY_ZONE

        kubectl get nodes --output wide

    # OR

    # TO connect to cluster from cloud shell
        # configure authorized network and then run
        gcloud container clusters get-credentials my-app-cluster
        #  list only the nodes with the temp=true label 
        kubectl get nodes -l temp=true
        curl ifconfig.me


    # enable authorized network (to disable authorized network access - https://cloud.google.com/kubernetes-engine/docs/how-to/authorized-networks#disable)
    # authorize cloud shell IP (only works when --enable-private-endpoint is not enabled)
    gcloud container clusters update my-app-cluster \
        --enable-master-authorized-networks \
        --master-authorized-networks [natIP of above command/32]

    gcloud container clusters describe my-app-cluster
   
    # remove unnecessary default workload objects
    kubectl scale deployment --replicas=0 kube-dns-autoscaler --namespace=kube-system
    kubectl scale deployment --replicas=0 kube-dns --namespace=kube-system


#Create static IP address
gcloud compute addresses create my-app-public-ip --global
    # to find the address run
    gcloud compute addresses describe my-app-public-ip --global


#  # create cloud armor security policy
#     gcloud compute security-policies create my-app-armor-policy \
#     --description "policy for rate limiting" 
#     # --type=CLOUD_ARMOR_EDGE 
#         # add rule to policy. Config setting details - https://cloud.google.com/armor/docs/rate-limiting-overview#throttle-traffic
#         gcloud compute security-policies rules create 100 \
#             --security-policy=my-app-armor-policy     \
#             --action=throttle                   \
#             --rate-limit-threshold-count=20           \
#             --rate-limit-threshold-interval-sec=30   \
#             --conform-action=allow           \
#             --exceed-action=deny-429         \
#             --enforce-on-key=IP


# CI/CD
    # enable the APIs
    gcloud services enable container.googleapis.com \
    cloudbuild.googleapis.com \
    sourcerepo.googleapis.com \
    artifactregistry.googleapis.com \
    secretmanager.googleapis.com

     

    # create docker repo - https://cloud.google.com/artifact-registry/docs/helm/store-helm-charts
        # repo for helm
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
        --location=$MY_REGION --member=serviceAccount:$PROJECT_NUMBER@cloudbuild.gserviceaccount.com \
        --role=roles/artifactregistry.writer

    gcloud artifacts repositories add-iam-policy-binding my-app-be-docker-repo \
        --location=$MY_REGION --member=serviceAccount:$PROJECT_NUMBER@cloudbuild.gserviceaccount.com \
        --role=roles/artifactregistry.writer

    gcloud artifacts repositories add-iam-policy-binding my-app-fe-docker-repo \
        --location=$MY_REGION --member=serviceAccount:$PROJECT_NUMBER@cloudbuild.gserviceaccount.com \
        --role=roles/artifactregistry.writer
     

# DO THESE AFTER DEPLOYING WORKLOAD - Access secret manager
    # Enable the Secret Manager APIs:
    gcloud services enable secretmanager.googleapis.com

    # if there is permission error then try Grant roles to your user account.
        # gcloud projects add-iam-policy-binding $PROJECT_ID --member="<USER_IDENTIFIER>" --role=roles/secretmanager.admin

    # Create a secret to store the sample data:

        # Upload secret file then -
        gcloud secrets create $SECRET1_NAME \
        --data-file=gg-secret.txt
        # delete secret file 

    # Grant the kubernetes service account read-only access to the secret
    gcloud secrets add-iam-policy-binding $SECRET1_NAME \
    --member=principal://iam.googleapis.com/projects/$PROJECT_NUMBER/locations/global/workloadIdentityPools/$PROJECT_ID.svc.id.goog/subject/ns/$MY_NAMESPACE/sa/$BE_SERVICE_ACCOUNT \
    --role='roles/secretmanager.secretAccessor' \
    --condition=None

    # Grant cloud storage access to k8s service account
    gcloud storage buckets add-iam-policy-binding gs://$QUESTION_BUCKET \
    --role=roles/storage.objectViewer \
    --member=principal://iam.googleapis.com/projects/$PROJECT_NUMBER/locations/global/workloadIdentityPools/$PROJECT_ID.svc.id.goog/subject/ns/$MY_NAMESPACE/sa/$BE_SERVICE_ACCOUNT \
    --condition=None

    # Optional to give write access to secret
        # gcloud secrets add-iam-policy-binding bq-readonly-key \
        # --member=principal://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/PROJECT_ID.svc.id.goog/subject/ns/admin-ns/sa/admin-sa \
        # --role='roles/secretmanager.secretVersionAdder' \
        # --condition=None

