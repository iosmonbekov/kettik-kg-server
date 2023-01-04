const { UserService } = require('./index')
const { UserModel } = require('../models')

class AuthService {
	async signUp(req, res) {
		try {

		} catch (e) {
			return res.status(400).send({ error: e.message })
		}
	}

	async signIn(req, res) {
		try {

		} catch (e) {

		}
	}
}

module.exports = new AuthService()
