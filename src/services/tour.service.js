const { Tour } = require('../models')

class UserService {
	async getAllTours() {
		try {
			return await Tour.findAll()
		} catch (e) {
			throw Error(e.message)
		}
	}

	async createTour(tour) {
		try {
			return await Tour.create(tour)
		} catch (e) {
			throw Error(e.message)
		}
	}
}

module.exports = new UserService()
