require('dotenv').config();
const API_KEY = process.env.MSW_KEY;
const MSW_URL = `http://magicseaweed.com/api/${API_KEY}/forecast/?spot_id=384`;

const fetch = require('node-fetch');
const wavePredictor = require('./wave-predictor');

module.exports = function(app) {
  fetch(MSW_URL)
  .then(data => data.json())
  .then(data => {
    app.locals.today = wavePredictor(data, 1);
    app.locals.tomorrow = wavePredictor(data, 9);
  })
  .then(() => console.log('ping'));
  return app;
};
// module.exports = fetch(MSW_URL)
//   .then(res => res.json())
//   .then(json => wavePredictor(json))
//   .then(str => console.log(str));
//
// module.exports = function() {
//
// };
