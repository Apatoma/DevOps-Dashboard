import requests
from app.config import JENKINS_URL, JENKINS_USER, JENKINS_TOKEN

def get_jenkins_status():
    url = f'{JENKINS_URL}/api/json'
    response = requests.get(url, auth=(JENKINS_USER, JENKINS_TOKEN))
    if response.status_code == 200:
        return response.json()
    else:
        return {'error': 'Failed to fetch Jenkins status'}
