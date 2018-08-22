<span style="color:red"> [DMI](https://dminc.com/) </span>
> **DMI Cloud Native CoP**
____
# Pre-requisites for AWS Development
____

### Create AWS Account

> IAM User – Programmatic Access(admin) follow instructions :  [link](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console) 


> Create a credentials file at ~/.aws/credentials on Mac/Linux or C:\Users\USERNAME\.aws\credentials on Windows
The content of credentials file will look like

`[default]`

`aws_access_key_id = your_access_key`

`aws_secret_access_key = your_secret_key`

### Install AWS Cli, follow [here](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)

> Verify that the AWS CLI installed correctly by running 

`aws --version`

### Install Git [here](https://git-scm.com/downloads)

> Verify that the Git installed correctly by running 

`git --version`

### Your favorite IDE

> If you choose to use eclipse, follow [link](https://aws.amazon.com/eclipse/) to install plugins 

### Node.js

> Install nodejs [here](https://nodejs.org/en/download/)

> Install serverless framework globally [start here](https://serverless.com/)
       `npm install serverless -g`
