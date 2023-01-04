const { Database } = require('../database/index')
const { UserModel } = require('../models/index')

class UserService {
	async getAllUsers(req, res) {
		try {
			const response = await Database.query('SELECT * FROM users')
			return res.send(response.rows)
		} catch (e) {
			return res.status(500)
		}
	}

	async createUser(req, res) {
		try {
			const user = new UserModel(req.body)
			const response = await Database.query(`
				INSERT INTO users(email, password) 
				VALUES ('${user.email}', '${user.password}')
			`)
			return res.send(response.rows)
		} catch (e) {
			return res.status(400).send({error: e.message})
		}
	}
}

module.exports = new UserService()
