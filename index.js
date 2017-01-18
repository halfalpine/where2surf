let express = require('express')
let app = express()
let noaaWeather = require('noaa-weather')
let buffer = require('buffer')
let soap = require('soap')

var fs = require('fs');
var parser = require('dwml-to-json');
var xmlString = fs.readFileSync('path/to/dwml-file', 'utf8');
var parsedData = dwmlParser.parse(xmlString)

app.get('/', function(req, res){
  noaaWeather(40.586521, -73.795127)
    .then(function(results) {
      res.json(results)
    })
    .catch(function(err) {
      res.send(err.toString())
    })
})

app.listen(3000, function() {
  console.log("Serving")
})
