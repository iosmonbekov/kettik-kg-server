require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Database = require('./database')

const {
	UsersController,
	AuthController,
	ToursController,
	RequestController
} = require('./controllers')

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use(cors())

app.use('/users', UsersController)
app.use('/auth', AuthController)
app.use('/tours', ToursController)
app.use('/requests', RequestController)

const bootstrap = async () => {
	try {
		await Database.authenticate()
		await Database.sync()
		app.listen(PORT, () => console.log(`Server started at port=${PORT}`))
	} catch(e) {
		console.log('Error: ', e)
	}
}

bootstrap()
