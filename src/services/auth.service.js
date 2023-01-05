const jwt = require('jsonwebtoken')

class AuthService {
	generateAccessToken(id, role) {
		const payload = {id, role}
		return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' })
	}

	verifyAccessToken(token, errorMessage) {
		try {
			return jwt.verify(token, process.env.JWT_SECRET)
		} catch (e) {
			throw Error(errorMessage ? errorMessage : e.message)
		}
	}
}

module.exports = new AuthService()
