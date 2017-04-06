var express = require('express')
var app = express()

app.set('view engine', 'pug') //Utilizamos Pug como templete para las vistas
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/tips', function (req, res) {
  res.render('index')
})

app.get('/datos-curiosos-1', function (req, res) {
  res.render('index')
})
app.get('/numero-phi', function (req, res) {
  res.render('index')
})

app.get('/guias', function (req, res) {
  res.render('index')
})

app.get('/reflexiones', function (req, res) {
  res.render('index')
})

app.listen(80, function (err) {
  if (err) {
    console.log(err)
  }

  console.log('Itamath is running in port 3000 :v')
})