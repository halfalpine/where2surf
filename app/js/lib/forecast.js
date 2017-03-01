require('dotenv').config();
const API_KEY = process.env.MSW_KEY;
const MSW_URL = `http://magicseaweed.com/api/${API_KEY}/forecast/?spot_id=384`;

const fetch = require('node-fetch');
const wavePredictor = require('./wave-predictor');

// Call initially and recursively call at set interval delay;
// const delay = 3600000;
let dest;

module.exports = fetch(MSW_URL)
  .then(res => res.json())
  .then(json => wavePredictor(json))
  .then(str => str);
