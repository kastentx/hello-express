var path = require('path')
var express = require('express')
var app = express()

app.get('/welcome/:name', function(req, res) {
  res.status(200)
  res.set('Content-type', 'text/html')
  res.send('<html><body>' +
    '<h1>Hello ' + req.params.name + '</h1>' +
    '</body></html>')
})

app.get('/chimney', function(req, res) { 
  res.status(200)
  res.set('Content-type', 'text/html')
  res.send('<html><body>' +
    '<h1 style="color:red; background:black">You found the secret chimney page!</h1>' +
    '</body></html>')
})

app.get('/*', function(req, res) {
  res.status(200)
  res.set('Content-type', 'text/html')
  res.send('<html><body>' +
    '<h1>You typed in the wrong address d00d!</h1>' +
    '</body></html>')
})
app.listen(8000)
