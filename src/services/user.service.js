const { User, Tour} = require('../models')

class UserService {
	async getAllUsers() {
		try {
			return await User.findAll({ include: Tour })
		} catch (e) {
			throw Error(e.message)
		}
	}

	async getUserByEmail(email) {
		try {
			const response = await User.findOne({
				where: {
					email
				}
			})
			return response ?? null
		} catch (e) {
			throw Error(e.message)
		}
	}

	async createUser(user) {
		try {
			return await User.create(user)
		} catch (e) {
			throw Error(e.message)
		}
	}
}

module.exports = new UserService()
