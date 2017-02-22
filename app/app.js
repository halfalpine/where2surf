require('dotenv').config();
const express = require('express');
const app = express();
const fetchForecast = require('./js/lib/forecast');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(require('./js/routers/index'));

//Call initially and recursively call at set interval delay;
const delay = 3000;

(function getDestination() {
  fetchForecast.then(data => console.log(data));
  setInterval(getDestination, delay);
})();


app.listen(app.get('port'), function() {
  console.log(`Now serving on port ${app.get('port')}`);
});
