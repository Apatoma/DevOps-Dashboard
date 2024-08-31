import docker
from app.config import DOCKER_HOST

def get_docker_status():
    client = docker.DockerClient(base_url=DOCKER_HOST)
    containers = client.containers.list(all=True)
    return [{'name': container.name, 'status': container.status} for container in containers]
