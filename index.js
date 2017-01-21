require('dotenv').config()
let express = require('express')
let app = express()
let request = require("request");
// npm install request

let options = { method: 'GET',
  url: 'http://api.planetos.com/v1/search/text',
  qs: { apikey: 'process.env.PLANET_OS', q: 'temperature' },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  // console.log(body);
  let result = JSON.parse(body)
  console.log(result)
});

app.listen(3000, function() {
  console.log("Serving")
})
