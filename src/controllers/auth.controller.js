const Controller = require('express')
const controller = Controller()

const { AuthService, UserService } = require('../services/index')
const { UserDTO } = require('../dto')

controller.post('/sign-up', async (req, res) => {
	try {
		const user = new UserDTO(req.body)
		const candidate = await UserService.getUserByEmail(user.email)

		if (candidate) throw Error('User already exist')
		const newUser = await UserService.createUser(user)
		const token = AuthService.generateAccessToken(newUser)
		return res.status(201).send({ token })
	} catch (e) {
		return res.status(400).send({error: e.message})
	}
})

controller.post('/sign-in', async (req, res) => {
	try {
		const user = new UserDTO(req.body)
		const candidate = await UserService.getUserByEmail(user.email)

		if (!candidate) throw Error('User with this email doesn\'t exist')
		if (user.password !== candidate.password) throw Error('Password not correct')

		const token = AuthService.generateAccessToken(candidate)
		return res.send({ token })
	} catch (e) {
		return res.status(400).send({error: e.message})
	}
})

module.exports = controller
