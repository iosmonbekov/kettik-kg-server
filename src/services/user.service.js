const { Database } = require('../database/index')

class UserService {
	async getAllUsers() {
		try {
			const response = await Database.query('SELECT * FROM users JOIN roles on users.role = roles.role')
			return response.rows
		} catch (e) {
			throw Error(e.message)
		}
	}

	async getUserByEmail(email) {
		try {
			const response = await Database.query(`
				SELECT * FROM users
				JOIN roles ON users.role = roles.role
                AND users.email = '${email}'
			`)
			return response.rows[0] ?? null
		} catch (e) {
			throw Error(e.message)
		}
	}

	async createUser(user) {
		try {
			const response = await Database.query(`
				INSERT INTO users(email, password) 
				VALUES ('${user.email}', '${user.password}')
			`)
			return response.rows
		} catch (e) {
			throw Error(e.message)
		}
	}
}

module.exports = new UserService()
