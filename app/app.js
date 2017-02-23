require('dotenv').config();
const express = require('express');
const app = express();
const fetchForecast = require('./js/lib/forecast');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.dest = 'foo';

app.use(require('./js/routers/index'));

// Call initially and recursively call at set interval delay;
const delay = 3600000;

(function getDestination() {
  fetchForecast
    .then(data => console.log(data))
    .then(function(data) {
      if (data) {
        app.locals.dest = data;
      } else {
        app.locals.dest = 'bar';
      }
    });
  setInterval(getDestination, delay);
})();

console.log(app.locals.dest);

app.listen(app.get('port'), function() {
  console.log(`Now serving on port ${app.get('port')}`);
});
