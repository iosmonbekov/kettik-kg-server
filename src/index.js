const express = require('express')

const PORT = process.env.PORT || 8080
const app = express()

app.get('/', (req, res) => {
	return res.send({homepage: '.'})
})

app.listen(PORT, () => console.log(`Server started at port=${PORT}`))
