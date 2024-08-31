from flask import jsonify
from app import app
from app.jenkins_integration import get_jenkins_status
from app.docker_integration import get_docker_status
from app.kubernetes_integration import get_kubernetes_status

@app.route('/jenkins', methods=['GET'])
def jenkins_status():
    return jsonify(get_jenkins_status())

@app.route('/docker', methods=['GET'])
def docker_status():
    return jsonify(get_docker_status())

@app.route('/kubernetes', methods=['GET'])
def kubernetes_status():
    return jsonify(get_kubernetes_status())
