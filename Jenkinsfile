
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
               
			}
			
}
}
}
