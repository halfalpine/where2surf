// The purpose of 'home' is to ping the server and
require('dotenv').config();
let wavePredictor = require('./wave-predictor.js');

const API_KEY = process.env.MSW_KEY;
const MSW_URL = `http://magicseaweed.com/api/${API_KEY}/forecast/?spot_id=384`;

if (self.fetch) {
  // make fetch requst
  fetch(MSW_URL)
    .then(wavePredictor(response))
    .catch(function(err) {
      console.err(err);
    });
} else {
  console.log('Doesn\'t support fetch API!')
}
