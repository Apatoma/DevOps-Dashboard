from kubernetes import client, config
from app.config import KUBERNETES_CONFIG_PATH

def get_kubernetes_status():
    config.load_kube_config(KUBERNETES_CONFIG_PATH)
    v1 = client.CoreV1Api()
    pods = v1.list_pod_for_all_namespaces(watch=False)
    return [{'name': pod.metadata.name, 'status': pod.status.phase} for pod in pods.items]
