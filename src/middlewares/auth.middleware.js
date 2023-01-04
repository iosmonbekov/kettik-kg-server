const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
	if (req.method === 'OPTIONS') next()

	try {
		const token = req.headers.authorization
		if (!token) throw Error()
		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		req.user = decoded
		next()
	} catch (e) {
		return res.status(403).send({error: 'User not authorized'})
	}
}