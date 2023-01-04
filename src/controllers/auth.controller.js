const Controller = require('express')
const controller = Controller()
const jwt = require('jsonwebtoken')

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
controller.post('/sign-in', async (req, res) => {
	try {
		const user = new UserModel(req.body)
		const candidate = await UserService.getUserByEmail(user.email)

		if (!candidate) throw Error('User doesn\'t exist')
		if (user.password !== candidate.password) throw Error('Password not correct')

		const token = AuthService.generateAccessToken(user.email, user.password)
		return res.send({ token })
	} catch (e) {
		return res.status(400).send({error: e.message})
	}
})

module.exports = controller
