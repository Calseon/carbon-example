kubectl create -f task-clone.yml
kubectl create -f task-docker-build.yml
kubectl create -f task-deploy.yml

kubectl create -f pipeline.yml

# Set USERID and APIKEY
REGISTRY=https://hub.docker.com/
kubectl create secret generic docker-registry-secret --type="kubernetes.io/basic-auth" --from-literal=username=${USERID} --from-literal=password=${APIKEY}
kubectl annotate secret docker-registry-secret tekton.dev/docker-0=${REGISTRY}

kubectl create -f service-account.yml

kubectl create -f pv-pvc.yml

#kubectl delete pipelinerun --all
kubectl create -f pipeline-run.yml      
#kubectl get pipelinerun   
#kubectl describe PIPELINERUN or POD