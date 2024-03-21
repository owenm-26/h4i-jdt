// Import the pool object from 'db.js' which is configured to interact with the PostgreSQL database.
const pool = require('./db')

// Define a string that contains the SQL statement for creating a new table.
// This SQL command will create a table named 'tweets' with four columns:
// 'id' which is an automatically incrementing primary key,
// 'username' which is a variable character field with a maximum length of 255 characters and cannot be null,
// 'content' which is similar to 'username' but stores the content of the tweet,
// 'created_at' which is a variable character field intended to store the date and time when the tweet was created.
const createTableText = `
    CREATE TABLE tweets (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        content VARCHAR(255) NOT NULL,
        created_at VARCHAR(255) NOT NULL
    );`;

// Execute the SQL command to create the table using the pool's query method.
// The .then() block will execute if the table is created successfully.
pool.query(createTableText)
    .then(() => {
        // If the table is created without errors, log 'Done!' to the console.
        console.log('Done!')
    }).catch((err) => {
        // If there's an error during the table creation, log 'UH OH' and the error to the console.
        console.log("UH OH", err)
    })