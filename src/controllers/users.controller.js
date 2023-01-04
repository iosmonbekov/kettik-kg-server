const Controller = require('express')
const controller = Controller()

const { AuthMiddleware } = require('../middlewares')
const { UserService } = require('../services')

controller.get('/', AuthMiddleware, async (req, res) => {
	try {
		console.log(req.user)
		const users = await UserService.getAllUsers()
		return res.send(users)
	} catch (e) {
		return res.status(400).send({ error: e.message })
	}
})

module.exports = controller
