// Import the Client class from the 'pg' (node-postgres) module
const { Client } = require('pg');

// Create a new instance of the Client class and configure the connection to the PostgreSQL database
const client = new Client({
    user: 'atod9',          // PostgreSQL username
    host: 'localhost',      // Hostname of the PostgreSQL server (typically 'localhost' for local development)
    database: 'company_db', // Name of the database to connect to
    password: 'adam1234',   // Password for the PostgreSQL user
    port: 5432,             // Port number where the PostgreSQL server is listening (default is 5432)
});

// Establish a connection to the PostgreSQL database
client.connect();

// Export the client instance to be used in other modules/files
module.exports = client;

