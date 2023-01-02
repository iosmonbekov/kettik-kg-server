const { Client } = require('pg')

const Database = new Client({
	host: process.env.DATABASE_HOST,
	port: process.env.DATABASE_PORT,
	database: process.env.DATABASE,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	ssl: {
		rejectUnauthorized: false
	}
})

Database.connect((err) => {
	if (err) {
		console.error('Database connection error', err.stack)
	} else {
		console.log('Database connected')
	}
})

module.exports =  {
	Database,
}
