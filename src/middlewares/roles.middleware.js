const jwt = require('jsonwebtoken')

module.exports = function (roles) {
	return function (req, res, next) {
		if (req.method === 'OPTIONS') next()

		try {
			const token = req.headers.authorization
			if (!token) throw Error()

			const { role } = jwt.verify(token, process.env.JWT_SECRET)
			if (!roles.includes(role)) throw Error()
			next()
		} catch (e) {
			return res.status(403).send({error: 'User have no permission!'})
		}
	}
}