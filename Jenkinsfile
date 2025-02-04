pipeline {
    agent any
    environment {
        DOCKER_HUB_USER = 'reyanebaiju'
        DOCKER_IMAGE = 'reyanebaiju/littleproject:latest'
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/ReyaneBaiju/littleproject.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
            withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                sh 'docker push reyanebaiju/littleproject:latest'
            }
                
            }
        }
        stage('Deploy to AKS') {
            steps {
                sh 'kubectl apply -f k8s-deployment.yaml'
            }
        }
    }
}  // <-- Missing closing curly bracket added here
