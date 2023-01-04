module.exports = class User {
	constructor({email, password}) {
		if (!email || !password) throw Error('You missed some properties')
		this.email = email
		this.password = password
	}
}
