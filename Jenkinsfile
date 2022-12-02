pipeline {

	agent any
	stages {
		
		

		
		stage("Build") {

			steps  {
				sh "sudo rm -rf $WORKSPACE}/.[a-z]*"
				sh "sudo yarn"
                                sh "sudo yarn build"
        
			} 
    
        
		}
		stage("deploy") {
		
			
			steps {
				//sh "sudo cp -rf ${WORKSPACE}/* /var/www/ticked-final/"
				//sh "sudo su - samuaraiaj && whoami"
				sh "echo hello"
                		
				
			}
			
			
}
}
    }

