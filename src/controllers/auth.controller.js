const Controller = require('express')
const controller = Controller()

const { AuthService } = require('../services/index')

controller.post('/sign-up', AuthService.signUp)
controller.post('/sign-in', AuthService.signIn)

module.exports = controller
