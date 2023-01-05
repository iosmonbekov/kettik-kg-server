const jwt = require('jsonwebtoken')
const {AuthService} = require('../services')

module.exports = function (roles) {
	return function (req, res, next) {
		try {
			if (req.method === 'OPTIONS') next()

			const token = req.headers.authorization
			if (!token) throw Error('User not authorized')

			const { role } = AuthService.verifyAccessToken(token, 'User not authorized')
			if (!roles.includes(role)) throw Error('You have no permission')
			next()
		} catch (e) {
			return res.status(403).send({error: e.message})
		}
	}
}
