# Manage-Books

This project is a basic web server that can be started using Node.js and npm.

## Installation

To get started, follow these steps:

1. Open your terminal.

2. Navigate to the project directory.

3. Run the following command to install the necessary dependencies: npm install -g

4. Once you have installed the dependencies, you can start the server by running: npm start


The server will start running on port 8000 by default.

## Accessing the Server

You can access the server by opening a web browser and navigating to [http://localhost:8000] in your web browser.

# Deployment Process

This project is deployed on an AWS EC2 instance. 
Below are the steps to set up the deployment:

## AWS EC2 Instance Configuration

1. Create an AWS EC2 instance in the Asia-Pacific region with the following configuration:
   - Operating System: Ubuntu 20.04 LTS
   - Architecture: 64-bit
   - Instance Type: t2.micro
   - Allow HTTP and HTTPS traffic
   - Storage: 8GB (gp2)

2. In the security group settings, add an inbound rule to allow custom TCP traffic on port 8000 from anywhere.

## Setup on EC2 Instance

3. Install Node.js and npm on the EC2 instance.

   ```bash
   # Update package list
   sudo apt update

   # Install Node.js and npm
      first install nvm from nvm-github
      curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
      nvm install 18.17.1 (to install the desire version)

4. Clone the porject from github
   git clone repository_url

5. npm install -g pm2

6. pm2 start app.js









   

