
pipeline {

	agent any
	stages {
		
		

		stage("Build"){

			steps {
				git "https://github.com/workshopapps/todoassistant.web.git"
				sh "sudo yarn"
                                sh "sudo yarn build"
        
			} 
    }
        

		stage("deploy") {
		
			steps {
				sh "sudo rm -rf /var/www/ticked-slack/*"
				sh "sudo cp -rf ./... /var/www/ticked-final/"
				
				
               
			}
			
}
}
}

