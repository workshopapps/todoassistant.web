
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
				sh "sudo cp -rf ./* /home/samuraiaj/ticked-finial"
				sh "sudo su - samuraiaj && whoami"
               
			}
			
}
}
}
