const jwt = require('jsonwebtoken')

class AuthService {
	generateAccessToken(id, role) {
		const payload = {id, role}
		return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' })
	}

	async signIn(req, res) {
		try {

		} catch (e) {

		}
	}
}

module.exports = new AuthService()
