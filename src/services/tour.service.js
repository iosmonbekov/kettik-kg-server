const { Database } = require('../database/index')

class UserService {
	async getAllTours() {
		try {
			const response = await Database.query('SELECT * FROM tours')
			return response.rows
		} catch (e) {
			throw Error(e.message)
		}
	}

	async createTour(tour) {
		try {
			const response = await Database.query(`
				INSERT INTO tours(name, user_id, start_date, end_date, max_users) 
				VALUES ('${tour.name}', '${tour.user_id}', '${tour.start_date}', '${tour.end_date}', '${tour.max_users}')
			`)
			return response.rows
		} catch (e) {
			throw Error(e.message)
		}
	}
}

module.exports = new UserService()
