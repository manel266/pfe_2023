
       
pipeline {
	agent any
    stages {

        stage('Build du projet') {
		 agent { docker 'maven:3-alpine' }
            steps {

                sh 'mvn clean install -DskipTests '
				stash includes: 'target/*.jar', name: 'targetfiles'

            }
        }
    }
}
