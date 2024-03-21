// Import the Express library.
const express = require('express');
// Create a new router object to define routes.
const router = express.Router();
// Import the controllers module which contains functions to handle requests for each route.
const controllers = require('./controllers.js');

// Define a GET route on the root path ('/'). When a GET request is made to this path,
// the `getData` function from the controllers module will be called to handle the request.
router.get('/', controllers.getData);

// Define a POST route on the root path ('/'). When a POST request is made to this path,
// the `postData` function from the controllers module will be called to handle the request,
// typically used for creating a new data entry (like a new tweet).
router.post('/', controllers.postData);

// Define a DELETE route with a dynamic segment (':id'). When a DELETE request is made to this path,
// such as '/123', the `deletePost` function from the controllers module will be called with '123' as the id parameter.
// This route is used to delete a specific data entry by its ID.
router.delete('/:id', controllers.deletePost);

// Export the router to be used in other parts of the application, typically to be included in the main app file
// where an Express app is created. This allows the main app to use these defined routes.
module.exports = router;