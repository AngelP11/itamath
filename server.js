var express = require('express')
var app = express()

app.get('/', function (req, res) {
	res.send('Hola mundo!!')
})

app.listen(3000, function (err) {
	if (err) {
		console.log(err)
	}

	console.log('Itamar is running in port 3000 :v')
})