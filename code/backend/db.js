// Import the Pool class from the 'pg' (PostgreSQL) library,
// which will be used to create a pool of connections to the database.
const { Pool } = require('pg')

// Create a new Pool instance using connection details.
// A connection string (URI) is passed to the Pool constructor which contains
// information like the database username, password, server address, port, and database name.
// The connectionString is specific to a PostgreSQL instance hosted on the Railway platform, 
// which is a service that provides PostgreSQL hosting among other services.
const pool = new Pool ({
    connectionString: ""
    
    // get from yuor Railway PostgreSQL Database (in the Variables Tab --> DATABASE_URL)
    // Note: The actual URI has been redacted and placeholders <...> have been used for privacy.
})

// Export the created pool object so it can be imported and used in other parts of the application,
// particularly where database queries are executed.
module.exports = pool 
