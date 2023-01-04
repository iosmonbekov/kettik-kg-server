const Controller = require('express')
const controller = Controller()

const { UserService } = require('../services/index')

controller.get('/', UserService.getAllUsers)
controller.post('/', UserService.createUser)

module.exports = controller
