const jwt = require('jsonwebtoken')

class AuthService {
	generateAccessToken(user) {
		const payload = {email: user.email, role: user.role, id: user.id}
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
