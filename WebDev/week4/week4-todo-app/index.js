
const express = require('express')
const app = express()

app.get('/', function (req, res){
    res.send('<b>Hi there</b>')
})

app.listen(3000)