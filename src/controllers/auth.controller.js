const Controller = require('express')
const controller = Controller()

const { AuthService } = require('../services/index')
const { UserModel } = require('../models')
const { UserService } = require('../services')

controller.post('/sign-up', async (req, res) => {
	try {
		const user = new UserModel(req.body)
		const candidate = await UserService.getUserByEmail(user.email)

		if (candidate) throw Error('User already exist')
		await UserService.createUser(user)

		return res.status(201).send()
	} catch (e) {
		return res.status(400).send({error: e.message})
	}
})
controller.post('/sign-in', (req, res) => {
	try {

	} catch (e) {

	}
})

module.exports = controller
