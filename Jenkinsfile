
pipeline {

	agent any
	tools {
		nodejs 'nodejs'
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
				sh "sudo rm -rf /var/www/ticked-final/*
				sh "sudo cp -rf ./... /var/www/ticked-final/"
				//sh "sudo cp /home/samuraiaj/app.config.json /var/www/ticked-final/
				
               
			}
			
}
}
}
