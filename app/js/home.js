// The purpose of 'home' is to ping the server and
require('dotenv').config();

const APIKEY = process.env.MSW_KEY;
const MSWURL = `http://magicseaweed.com/api/${APIKEY}/forecast/?spot_id=384`;

if (self.fetch) {
  // make fetch requst
  fetch(MSWURL);
} else {
  // some ajax voodoo
}
