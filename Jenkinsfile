pipeline {
    agent { docker 'node:6.3' }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
        stage('Deploy') {
            steps {
                retry(2) {
                    sh 'echo "this is a test"
                        npm run start'
                }

                timeout(time: 3, unit: 'MINUTES') {
                    sh 'echo "its broken"'
                }
            }
        }
        post {
            always {
                echo 'This will always run'
            }
            success {
                echo 'This will run only if successful'
            }
            failure {
                echo 'This will run only if failed'
            }
            unstable {
                echo 'This will run only if the run was marked as unstable'
            }
            changed {
                echo 'This will run only if the state of the Pipeline has changed'
                echo 'For example, if the Pipeline was previously failing but is now successful'
            }
        }
    }
}
