
       
pipeline {
    // Telling Jenkins to run the pipeline on any available agent.
    agent any

environment {
    MONGODB_URI = credentials('mongodb-uri')
    TOKEN_KEY = credentials('token-key')
    EMAIL = credentials('email')
    PASSWORD = credentials('password')
}

stages {
    stage('Checkout') {
        steps {
            checkout scm
        }
    }
    // Ajoutez ici les autres étapes de votre pipeline
}

