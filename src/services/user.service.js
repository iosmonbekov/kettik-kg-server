const { Database } = require('../database/index')
const User = require('../models/user.model')

class UserService {
	async getAllUsers(req, res) {
		try {
			const response = await Database.query('SELECT * FROM users')
			return res.send(response.rows)
		} catch (e) {
			console.log('Error: ', e)
		}
	}

	async createUser(req, res) {
		try {
			const user = new User(req.body.email, req.body.password)
			const response = await Database.query(`
				INSERT INTO users(email, password) 
				VALUES ('${user.email}', '${user.password}')
			`)
			res.send(response.rows)
		} catch (e) {
			console.log('Error: ', e)
		}
	}
}

module.exports = new UserService()
