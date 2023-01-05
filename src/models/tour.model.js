module.exports = class Tour {
	constructor({name, start_date, end_date, max_users, user_id}) {
		this.setName(name)
		this.setStartDate(start_date)
		this.setEndDate(end_date)
		this.setMaxUsers(max_users)
		this.user_id = user_id
	}

	setName(value) {
		if (!value) throw Error('Name not exist')
		this.name = value
	}

	setStartDate(value) {
		if (!value) throw Error('StartDate not exist')
		this.start_date = value
	}

	setEndDate(value) {
		if (!value) throw Error('EndDate not exist')
		this.end_date = value
	}

	setMaxUsers(value) {
		if (!value) throw Error('MaxUsers not exist')
		this.max_users = value
	}
}
