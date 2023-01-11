const Controller = require('express')
const controller = Controller()

const { RequestService } = require('../services')

controller.get('/tour/:id', async (req, res) => {
	try {
		const id = Number(req.params.id)
		const status = req.query.status || 'NEW'
		const [{ users }] = await RequestService.getTourRequests(id, status)
		return res.send(users)
	} catch (e) {
		return res.status(400).send({error: e.message})
	}
})



module.exports = controller
