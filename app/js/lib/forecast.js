require('dotenv').config();
let fetch = require('node-fetch');

const API_KEY = process.env.MSW_KEY;
const MSW_URL = `http://magicseaweed.com/api/${API_KEY}/forecast/?spot_id=384`;

module.exports = fetch(MSW_URL)
  .then(function(res) {
    return res.json();
});
