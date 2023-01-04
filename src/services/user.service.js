const { Database } = require('../database/index')
const { UserModel } = require('../models/index')

class UserService {
	getAllUsers = async (req, res) => {
		try {
			const response = await Database.query(
				'SELECT * FROM users JOIN roles on users.role = roles.role'
			)
			return res.send(response.rows)
		} catch (e) {
			return res.status(500)
		}
	}

	async getUserByEmail(email) {
		try {
			const response = await Database.query(`
				SELECT * FROM users
				JOIN roles ON users.role = roles.role
                AND users.email = '${email}'
			`)
			return response.rows
		} catch (e) {
			console.log('Error: ', e.message)
		}
	}

	createUser = async (req, res) => {
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
