require('dotenv').config();
const express = require('express');
const app = express();
// const fetchForecast = require('./js/lib/forecast');
const API_KEY = process.env.MSW_KEY;
const MSW_URL = `http://magicseaweed.com/api/${API_KEY}/forecast/?spot_id=384`;

let fetch = require('node-fetch');
let wavePredictor = require('./js/lib/wave-predictor');

app.locals.dest = 'foo';

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static(__dirname + '/public'));
app.use(require('./js/routers/index'));

// Call initially and recursively call at set interval delay;
const delay = 3600000;

fetch(MSW_URL)
  .then(res => res.json())
  .then(json => wavePredictor(json))
  .then(str => app.locals.dest = str);

app.listen(app.get('port'), function() {
  console.log(`Now serving on port ${app.get('port')} at ${new Date()}`);
});
