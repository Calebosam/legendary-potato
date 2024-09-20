pipeline{
    agent any

    tools {nodejs "nodejs"}

    stages{
        stage("Install Dependecies"){
            steps{
                sh 'npm install'
            }
            
        }
        stage("Run Linting Checks"){
            steps{
                sh 'npm run lint'
            }
            
        }
        stage("Run Unit Tests"){
            steps{
                sh 'npm run test'
            }
            
        }
        stage("Build"){
            steps{
                sh 'npm run build'
            }
            
        }
        stage("Deploy to S3"){
            when {
                branch 'main';
            }
            steps{
                withAWS(region:'eu-west-1',credentials:'aws-cred') {
                    sh 'aws s3 sync ./dist s3://legendary-potato --delete'
                    echo 'Application Live here: https://legendary-potato.s3.eu-west-1.amazonaws.com/index.html'
                }
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}