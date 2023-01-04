require('dotenv').config()
const express = require('express')
const cors = require('cors')

const { UsersController } = require('./controllers/index')

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use(cors())
app.use('/users', UsersController)

const bootstrap = async () => {
	try {
		app.listen(PORT, () => console.log(`Server started at port=${PORT}`))
	} catch(e) {
		console.log('Error: ', e)
	}
}

bootstrap()
