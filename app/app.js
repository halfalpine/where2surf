require('dotenv').config();
let express = require('express');
let app = express();
let fetch = require('node-fetch');
let getForecast = require('./js/lib/forecast');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(require('./js/routers/index'));

getForecast.then(function(data) {
  console.log(data);
});

app.listen(app.get('port'), function() {
  console.log(`Now serving on port ${app.get('port')}`);
});
