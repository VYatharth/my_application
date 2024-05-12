
# Create custom mode VPC 
# Not sure it should be private or public
gcloud compute networks create privatenet --subnet-mode=custom

#  create subnet - can be avoided as well, since when you enable IP aliases in, you let Kubernetes Engine automatically create a subnetwork for you.
gcloud compute networks subnets create my-subnet \
    --network=privatenet \
    --range 10.0.4.0/22 \
    --enable-private-ip-google-access \
    --region=$REGION \
    --secondary-range my-svc-range=10.0.32.0/20,my-pod-range=10.4.0.0/14

#Create firewall rules to allow SSH, ICMP, and RDP ingress traffic to VM instances (May not be needed for my app)
gcloud compute firewall-rules create privatenet-allow-icmp-ssh-rdp --direction=INGRESS --priority=1000 --network=privatenet --action=ALLOW --rules=icmp,tcp:22,tcp:3389 --source-ranges=0.0.0.0/0



# Create a Docker repository in Artifact Registry - https://cloud.google.com/build/docs/build-push-docker-image#create_a_docker_repository_in 
gcloud artifacts repositories create quickstart-docker-repo --repository-format=docker \
    --location=us-west2 --description="Docker repository"



# create a custom security role to access cloud storage

    # role config - put it in a yaml file
    title: "orca_storage_editor_196"
    description: "orca_storage_editor_196"
    stage: "ALPHA"
    includedPermissions:
    - storage.buckets.get      
    - storage.objects.get
    - storage.objects.list
    - storage.objects.update
    - storage.objects.create

    gcloud iam roles create orca_storage_editor_196 --project qwiklabs-gcp-00-8051f9ee03bc --file role-definition.yaml

# Create service account to allow GKE to access cloud storage
gcloud iam service-accounts create orca-private-cluster-408-sa --display-name "my service account"
# Bind the custom security role to service account
gcloud projects add-iam-policy-binding qwiklabs-gcp-00-8051f9ee03bc --member serviceAccount:orca-private-cluster-408-sa@qwiklabs-gcp-00-8051f9ee03bc.iam.gserviceaccount.com --role projects/qwiklabs-gcp-00-8051f9ee03bc/roles/orca_storage_editor_196

# create private cluster with custom subnet
gcloud beta container clusters create private-cluster2 \
    --enable-private-nodes \
    --enable-ip-alias \
    --master-ipv4-cidr 172.16.0.32/28 \
    --enable-private-endpoint \
    --service-account="my service account" \
    --network privatenet \
    --subnetwork my-subnet \
    --services-secondary-range-name my-svc-range \
    --cluster-secondary-range-name my-pod-range \
    --zone=$ZONE

# Create node pool
    # If you receive an error that no preemptible instances are available, you can remove the --preemptible option to proceed
gcloud container node-pools create "temp-pool-1" \
    --cluster=$my_cluster --zone=$my_zone \
    --num-nodes "2" --node-labels=temp=true --preemptible

# Enable master authorized network
gcloud container clusters update private-cluster \
    --enable-master-authorized-networks \
    --master-authorized-networks [MY_EXTERNAL_RANGE]
