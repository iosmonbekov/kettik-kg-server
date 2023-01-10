const Controller = require('express')
const controller = Controller()

const { TourDTO } = require('../dto')
const { TourService } = require('../services')
const { AuthMiddleware } = require('../middlewares')

controller.post('/', AuthMiddleware, async (req, res) => {
	try {
		const tour = new TourDTO(req.body)
		return res.status(201).send(await TourService.createTour(tour))
	} catch (e) {
		return res.status(400).send({error: e.message})
	}
})

controller.post('/:id', AuthMiddleware, async (req, res) => {
	try {
		const tourId = Number(req.params.id)
		const userId = Number(req.body.userId)
		const response = await TourService.connectUserAndTour(userId, tourId)
		return res.send(response)
	} catch (e) {
		return res.status(400).send({error: e.message})
	}
})

controller.get('/my', AuthMiddleware, async (req, res) => {
	try {
		const userId = Number(req.user.id)
		const tours = await TourService.getUserTours(userId)
		return res.send(tours)
	} catch (e) {
		return res.status(400).send({error: e.message})
	}
})

controller.get('/', AuthMiddleware, async (req, res) => {
	try {
		const tours = await TourService.getAllTours()
		return res.send(tours)
	} catch (e) {
		return res.status(400).send({error: e.message})
	}
})

controller.get('/:id', AuthMiddleware, async (req, res) => {
	try {
		const id = Number(req.params.id)
		console.log(id)
		const tour = await TourService.getTourById(id)
		return res.send(tour)
	} catch (e) {
		return res.status(400).send({error: e.message})
	}
})

module.exports = controller
