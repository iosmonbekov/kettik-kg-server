require('dotenv').config()
const express = require('express')
const cors = require('cors')
const UserService = require('./services/user.service')

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use(cors())

const bootstrap = async () => {
	try {
		app.get('/users', UserService.getAllUsers)
		app.post('/users', UserService.createUser)
		app.listen(PORT, () => console.log(`Server started at port=${PORT}`))
	} catch(e) {
		console.log('Error: ', e)
	}
}

bootstrap()
