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
				sh "sudo rm -rf /home/samuraiaj/ticked-prod/*"
				sh "sudo cp -rf * /home/samuraiaj/ticked-prod/"
				sh "sudo su - samuraiaj && whoami"
				sh "sudo systemctl restart tickedfrontend.service"
                		
				
			}
			
			
}
}
    }




