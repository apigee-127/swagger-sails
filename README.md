# Sails.js Hook for Swagger projects

This middleware is used by the [Swagger](https://www.npmjs.com/package/swagger) project. It is designed to handle all your Open API-driven project needs with minimal fuss - and maximal flexibility.

### Important!
This is primarily a wrapper for the [swagger-node-runner](https://github.com/theganyo/swagger-node-runner) project. Be sure to follow that project and read the release notes there! 

## Installing

### Swagger greenfield app

This hook will automatically be installed and used when creating a Sails application through the 
[Swagger](https://www.npmjs.com/package/swagger) cli. 

### Existing Sails apps

To add to an existing Sails app:

1. Install module as a dependency in your app: `npm install --save swagger-sails-hook`
2. Create a directory called api/mocks in your app
3. Create a directory called api/swagger in your app
3. Copy your `swagger.yaml` file to the api/swagger directory
4. Start your app: `swagger project start`
