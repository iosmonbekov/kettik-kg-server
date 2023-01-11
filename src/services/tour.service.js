const { Tour, User, UserTour} = require('../models')

class TourService {
	async getAllTours() {
		try {
			return await Tour.findAll({ include: {
				model: User,
				attributes: ['id', 'email'],
				through: {
					attributes: []
				},
			}})
		} catch (e) {
			throw Error(e.message)
		}
	}

	async getUserTours(userId) {
		try {
			return await Tour.findAll({ include: {
				model: User,
				attributes: [],	
				where: {
					id: userId
				},
				through: {
					attributes: []
				},
			}})
		} catch (e) {
			throw Error(e.message)
		}
	}

	async getTourById(tourId) {
		try {
			return await Tour.findOne({ where: {
				id: tourId
			}})
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

	async connectUserAndTour(userId, tourId) {
		try {
			return await UserTour.create({ userId, tourId })
		} catch (e) {
			throw Error(e.message)
		}
	}
}

module.exports = new TourService()
