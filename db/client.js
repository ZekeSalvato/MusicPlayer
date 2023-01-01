const { Client } = require('pg');

const connectionURL = process.env.DATABASE_URL || 'postgres://localhost:5432/musicdb'


const client = new Client({
  connectionString: connectionURL
})

module.exports = { client, 

}
