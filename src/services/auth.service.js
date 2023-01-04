
class AuthService {
	async signUp(req, res) {
		try {
			res.send({a: 'signUp'})
		} catch (e) {

		}
	}

	async signIn(req, res) {
		try {
			res.send({a: 'signIn'})
		} catch (e) {

		}
	}
}

module.exports = new AuthService()
