const Controller = require('express')
const controller = Controller()

controller.get('/sign-up')
controller.get('/sign-in')

module.exports = controller
