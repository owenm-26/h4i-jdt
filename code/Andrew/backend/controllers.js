// Import the models module, which contains functions to interact with the database.
const models = require('./models');

// An asynchronous function to handle GET requests. This function fetches data from the database.
exports.getData = async (req, res) => {
  try {
    // Call the getAll method from models which retrieves all rows from the database.
    const rows = await models.getAll();
    // Send the retrieved rows back to the client in JSON format.
    res.json(rows);
  } catch (err) {
    // If an error occurs, send a 500 Internal Server Error status code and the error message.
    res.status(500).send(err.message);
  }
};

// An asynchronous function to handle POST requests. This function posts new data to the database.
exports.postData = async (req, res) => {
    try {
        // Call the create method from models, passing in the data from the request body.
        const newRow = await models.create(req.body); 
        // If successful, send back the newly created row with a 201 Created status code in JSON format.
        res.status(201).json(newRow);
    } catch (err) {
        // If an error occurs, send a 500 Internal Server Error status code and the error message.
        res.status(500).send(err.message);
    }
};

// An asynchronous function to handle DELETE requests. This function deletes a post based on its ID.
exports.deletePost = async (req, res) => {
    // Log the 'id' parameter from the request for debugging purposes.
    try {
        // Extract the 'id' from the request parameters.
        const { id } = req.params;
        // Call the deletePostById method from models, passing in the 'id' to delete the corresponding row.
        await models.deletePostById(id);
        // Send a 200 OK status code to indicate the deletion was successful.
        res.status(200).send(`Deleted post with id: ${id}`);
    } catch (err) {
        // If an error occurs, send a 500 Internal Server Error status code and the error message.
        res.status(500).send(err.message);
    }
};