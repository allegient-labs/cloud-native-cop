# Building Serveless Angular App
____
## Clone project
`git clone https://github.com/allegient-labs/cloud-native-cop.git`	
## Build backend service first 
Follow [here](../node-backend/README.md) for Node backend and [here](../java-backend/README.md) for Java backend
## Open angular-frontend	
`cd cloud-native-cop/angular-frontend`
## Install dependencies 
`npm install`
## Start front end app locally
`ng serve` 
> Navigate to http://localhost:4200/
## Build the project
`ng build --prod`
> Now you should find the build artifacts in the dist/ directory
## Deploy to **AWS S3**
	`aws s3 mb s3://YOUR-BUCKET-NAME`
	`aws s3 cp ./dist/blogpanel s3://YOUR-BUCKET-NAME --recursive --acl public-read`	
>	Go to AWS Console to verify the bucket
