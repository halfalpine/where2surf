let express = require('express')
let app = express()
let noaaWeather = require('noaa-weather')
let buffer = require('buffer')

app.get('/', function(req, res){
  noaaWeather(40.586521, -73.795127)
    .then(function(results) {
      res.json(results)
    })
    .catch(function(err) {
      res.send(err.toString())
    })
})
/*
app.get('/', function(req,res) {
  noaaWeather(40.586521, -73.795127)
  .then(function(forecast){
    res.json(forecast)
    let buf = Buffer.from(forecast.body._readableState.buffer.head.data)
    console.log(forecast.body._readableState.buffer.head.data.toString())
    //let buf2 = Buffer.from(buf.data)
    //console.log(JSON.stringify(buf))

    //res.send(forecast)
  })
})
*/
app.listen(3000, function() {
  console.log("Serving")
})
