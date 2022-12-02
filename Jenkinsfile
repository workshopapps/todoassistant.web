
pipeline {

	agent any
	stages {
		
		

		
		stage("Build"){

			steps  {
				sh "sudo rm -rf "${WORKSPACE}"/.[!.]*"
				sh "sudo yarn"
                                sh "sudo yarn build"
        
			} 
    }
        

		stage("deploy") {
		
			
			steps {
				sh "sudo cp -rf ${WORKSPACE}/* /var/www/ticked-final/"
				sh "sudo cp -fr ${WORKSPACE}/frontend/* /var/www/ticked-final/"
				sh "sudo su - samuaraiaj && whoami"
                		sh "sudo pm2 stop ticked "
				sh "sudo pm2 serve /var/www/ticked-final --port 3020"
				
			}
			
			
}
}
}


