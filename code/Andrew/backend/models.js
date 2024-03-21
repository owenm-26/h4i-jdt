// Import the database pool object, which is configured elsewhere to manage a pool of database connections.
const pool = require('./db.js')

// An asynchronous function to retrieve all tweets from the database.
exports.getAll = async () => {

    // Await the resolution of the database query to select all rows from the 'tweets' table.
    const { rows } = await pool.query('SELECT * FROM tweets');

    // Return the rows from the query result, which contain all the tweets.
    return rows;
}

// An asynchronous function to create a new tweet in the database.
exports.create = async({ username, content, created_at }) => {
    
    // Await the resolution of the INSERT query to add a new tweet into the 'tweets' table.
    // The placeholders ($1, $2, $3) are used to prevent SQL injection by parameterizing the input.
    const { rows } = await pool.query(
      'INSERT INTO tweets(username, content, created_at) VALUES ($1, $2, $3) RETURNING *',
      [username, content, created_at]
    );

    // Return the first row of the result which contains the newly created tweet.
    return rows[0];
}

// An asynchronous function to delete a tweet from the database by its id.
exports.deletePostById = async (id) => {
    
    // Await the resolution of the DELETE query to remove a tweet from the 'tweets' table where the id matches.
    const { rows } = await pool.query('DELETE FROM tweets WHERE id = $1', [id]);
    
    // Return the rows from the query result. In case of DELETE, this will typically be an empty array,
    // but it depends on the database setup - some configurations can return the deleted rows.
    return rows; 
};
