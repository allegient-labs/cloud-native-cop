# <span style="color:red"> [DMI](https://dminc.com/) </span>
> # [**AWS AppSync**](https://aws.amazon.com/appsync/)
____
#### **Pre-requisites*
____

##### Create AWS Account

- IAM User – Programmatic Access(admin) follow instructions :  [link](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console) 

- Create a credentials file at: 
    - **~/.aws/credentials** on Mac/Linux or 
    - **C:\Users\USERNAME\.aws\credentials** on Windows

            The content of credentials file will look like

        `[default]`

        `aws_access_key_id = your_access_key`

        `aws_secret_access_key = your_secret_key`

##### Install AWS Cli, follow
- Installation guide is found: [here](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)
- MSI Installer for windows is found: [here](https://docs.aws.amazon.com/cli/latest/userguide/awscli-install-windows.html)

- Verify that the AWS CLI installed correctly by running: `aws --version`

##### Install Git [here](https://git-scm.com/downloads)

- Verify that the Git installed correctly by running `git --version`

##### Editor

- VSCode is editor of our choise can be found : [here](https://code.visualstudio.com/docs/setup/setup-overview) 

##### Node.js

- **node.js** is language of our choise, install nodejs [here](https://nodejs.org/en/download/)

##### Serverless Framework
- Install [serverless](https://serverless.com/) framework globally   `npm install serverless -g`
