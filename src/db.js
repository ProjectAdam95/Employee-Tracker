const { Client } = require('pg');

const client = new Client({
    user: 'atod9',
    host: 'localhost',
    database: 'company_db',
    password: 'adam1234',
    port: 5432,
});

client.connect();

module.exports = client;
