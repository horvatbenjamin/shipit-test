var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Sziasztok')
})
 
app.listen(1234)