let express = require('express')
let app = express()
let noaaWeather = require('noaa-weather')
let buffer = require('buffer')

app.listen(3000, function() {
  console.log("Serving")
})
