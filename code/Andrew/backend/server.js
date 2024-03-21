// Import the express module to use the express framework for creating the server.
const express = require('express');
// Import body-parser middleware to parse the body of incoming requests.
const bodyParser = require('body-parser');
// Import the CORS middleware to enable CORS with various options.
const cors = require('cors');

// Create an instance of an express application.
const app = express();
// Define the port number on which the express server will listen.
const port = 3000;

// Use the CORS middleware on the app. This will enable your server to respond to requests from different origins.
app.use(cors());
// Use the body-parser middleware to parse JSON payloads. This lets you access `req.body` in your routes.
app.use(bodyParser.json());

// Import the routes from the 'routes.js' module. These are defined routes for the application.
const routes = require('./routes');
// Tell the app to use the imported routes for any requests at the root path.
app.use('/', routes);

// Tell the app to listen on the specified port and log a message to the console when the server starts running.
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});