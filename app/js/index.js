// The purpose of 'home' is to ping the server and
require('dotenv').config();
let express = require('express');
let router = express.Router();
let fetch = require('node-fetch');
let wavePredictor = require('./wave-predictor.js');


router.get('/', function(req, res) {
  const API_KEY = process.env.MSW_KEY;
  const MSW_URL = `http://magicseaweed.com/api/${API_KEY}/forecast/?spot_id=384`;

/*
  fetch(MSW_URL)
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err) {
      console.err(err);
    });
*/
    res.render('index');
});

module.exports = router;
