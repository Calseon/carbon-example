kubectl delete service carbon-svc
kubectl delete deployment carbon-deployment

kubectl create -f deployment.yml
kubectl create -f service.yml
kubectl describe service carbon-svc | grep NodePort
