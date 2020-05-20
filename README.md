# ExpressMongoES6Generator
This is a starter package which setups an express app with a pooled MongoDB database connection. This also incorporates build commands with ES6 support using Babel.

## FEATURES
1. Express app setup
2. Setup a pooled MongoDB database connection
3. Starts the server on database connection using JavaScript promises
4. Creates separate folders for models, routes and configs
5. A method to inject the global MongoDB pooled connection to the various modules like routes and models
6. Setups support for ES6 using Babel
7. Adds support for nodemon for development server.
8. Adds a bin folder with two modules, namely, dev.js and prod.js. The dev.js imports the babel-register and transpiles es6+ on the fly. The prod.js imports a pre-transpiled code build using the custom build command
9. Defines an architecture to be used for models using classes, and static method to alter the corresponding MongoDB collection
10. Comes with a setup for importing environment variables
11. Preloads modules like morgan(for logging), express.json() and cookieParser
12. Defines an architecture for handling cors requests
13. Adds support for the following npm commands:
  a. start: starts a server with nodemon on bin/dev.js
  b. clean: cleans the previous transpiled build code.
  c. build: transpiles the code into a separate dist-src folder which can be deployed.
  d. prod: starts a server with bin/prod.js
  
## SETUP
To setup simply clone the project and do the following:
1. npm init to install the dependencies and development dependencies

     ```npm install```
  
2. edit the .env file with corresponding db urls, port numbers and other authentication details
3. override the package.json to include additional babel plugins and presets (you can also refractor the babel component into a separate .babelrc)
4. add any additional required modules to package.json

## FURTHER SUPPORT
I will be adding support for various other features in the future. Feel free to clone, raise issues and send pull requests!
