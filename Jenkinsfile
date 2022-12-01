
pipeline {

	agent any
	tools {
		nodejs 'Nodejs 18.0.0'
	}
	stages {
		
		

		stage("Build"){

			steps {
				
				sh "sudo yarn"
        sh "sudo yarn build"
        
			} 
    }
        

		stage("deploy") {
		
			steps {
				sh "sudo cp -rf ./* /home/samuraiaj/ticked-finial"
				sh "sudo su - samuraiaj && whoami"
                //sh "sudo pm2 stop certgo"
				//sh "sudo pm2 stop index"
				//sh "sudo pm2 serve /home/sean/certgo/frontend/build --port 3066"
				//sh "sudo pm2 start /home/sean/certgo/backend/index.js"
			}
			
	}


	}
