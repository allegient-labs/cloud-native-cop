# Develop and Deploy serverless Node.js app to AWS
____
## Clone project
`git clone https://github.com/allegient-labs/cloud-native-cop.git`	

## Open node-backend	
`cd cloud-native-cop/node-backend`

## Install dependencies 
`npm install`
 
## Deploy the service to cloud
`serverless deploy`
> Please make sure you have the necessary permission to deploy. If no credential is provided serverless will use the one in **/YOUR-HOME/.aws/credentials** file

> This may take few minutes if you are deploying the first time

> Make a note if any RESTful end points are created or you can find them at AWS API Gateway console page later
