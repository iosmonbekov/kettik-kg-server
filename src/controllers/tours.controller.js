const Controller = require('express')
const controller = Controller()
const { TourDTO } = require('../dto')
const { TourService } = require('../services')

controller.post('/', async (req, res) => {
	try {
		const tour = new TourDTO(req.body)
		await TourService.createTour(tour)
		return res.status(201).send()
	} catch (e) {
		return res.status(400).send({error: e.message})
	}
})

controller.get('/', async (req, res) => {
	try {
		const tours = await TourService.getAllTours()
		return res.send(tours)
	} catch (e) {
		return res.status(400).send({error: e.message})
	}
})

module.exports = controller
