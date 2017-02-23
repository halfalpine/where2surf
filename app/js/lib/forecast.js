require('dotenv').config();
let fetch = require('node-fetch');
let wavePredictor = require('./wave-predictor');

const API_KEY = process.env.MSW_URL;
const MSW_URL = `http://magicseaweed.com/api/${API_KEY}/forecast/?spot_id=384`;

module.exports = fetch(MSW_URL)
   .then(res => res.json())
   .then(data => wavePredictor(data))
  //  .then(data);
