const Controller = require('express')
const controller = Controller()

const { UserService } = require('../services/index')

controller.get('/', async (req, res) => {
	try {
		const users = await UserService.getAllUsers()
		return res.send(users)
	} catch (e) {
		return res.status(400).send({ error: e.message })
	}
})

module.exports = controller
