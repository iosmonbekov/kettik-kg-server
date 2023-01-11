const { Tour, User } = require('../models')

class RequestService {
	async getTourRequests(tourId, requestStatus) {
		try {
			return await Tour.findAll({
				where: { id: tourId },
				attributes: [],
				include: {
					model: User,
					attributes: ['id', 'email'],
					through: {
						attributes: [],
						where: {
							status: requestStatus
						}
					}
				}})
		} catch (e) {
			throw Error(e.message)
		}
	}


}

module.exports = new RequestService()
