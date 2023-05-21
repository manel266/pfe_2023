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

stage('login'){
        steps{
          sh 'docker login --username=manel26 --password=Fightforme1234'
        }
  }


	stage('Construction image') {
            steps {
                 unstash 'targetfiles'

			   script {
                        sh 'docker build . -t pipeline:latest'
						sh 'docker tag discoverymc 4587612/pipeline'
						sh 'docker push 4587612/pipeline'
                    }
               }
            }
			
    }	
			
			
			
        }



