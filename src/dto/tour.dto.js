module.exports = class {
	constructor({name, startDate, endDate, capacity }) {
		this.setName(name)
		this.setStartDate(startDate)
		this.setEndDate(endDate)
		this.setMaxUsers(capacity)
	}

	setName(value) {
		if (!value) throw Error('Name not exist')
		this.name = value
	}

	setStartDate(value) {
		if (!value) throw Error('StartDate not exist')
		this.startDate = value
	}

	setEndDate(value) {
		if (!value) throw Error('EndDate not exist')
		this.endDate = value
	}

	setMaxUsers(value) {
		if (!value) throw Error('MaxUsers not exist')
		this.capacity = value
	}
}
