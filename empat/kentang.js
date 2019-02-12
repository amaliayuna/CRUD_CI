var express = require('express')
var app = express()

app.get('/', function (req, res){
    res.send('hello world')
})

app.get('/Customer/edit/:name', function (req, res){
    res.send(req.params.name)
})

app.get('/Customer/show/:name', function (req, res){
    res.send (req.name)
})

app.get('/Customer/ganteng/:name', function (req, res){
    res.send("buah itu enak" + req.params.name)
})




app.listen(3000)