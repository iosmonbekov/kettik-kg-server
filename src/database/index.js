const { Sequelize } = require('sequelize')

module.exports = new Sequelize(
	process.env.DATABASE,
	process.env.DATABASE_USER,
	process.env.DATABASE_PASSWORD,
	{
		dialect: 'postgres',
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false
			}
		},
		host: process.env.DATABASE_HOST,
		port: process.env.DATABASE_PORT,
		logging: false,
	})
