kubectl delete service carbon-svc
kubectl delete deployment carbon-deployment

kubectl create -f deployment.yml
kubectl create -f service.yml


export EXTERNAL_IP=$(kubectl describe nodes | grep ExternalIP | grep -Eo "[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}")
export NODEPORT=$(kubectl describe service carbon-svc | grep "NodePort:[ ]*[a-zA-Z-]*[ ]*[0-9]*"| grep -Eo "[0-9]{1,5}")
echo ${EXTERNAL_IP}:${NODEPORT}
open http://$EXTERNAL_IP:$NODEPORT