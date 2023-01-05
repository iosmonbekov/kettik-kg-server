const { AuthService } = require('../services')

module.exports = function (req, res, next) {
	try {
		if (req.method === 'OPTIONS') next()

		const token = req.headers.authorization
		if (!token) throw Error('User not authorized')

		const decoded = AuthService.verifyAccessToken(token, 'User not authorized')
		req.user = decoded
		next()
	} catch (e) {
		return res.status(403).send({error: e.message})
	}
}
