const express = require('express');
const app = express();
const fetchForecast = require('./middlewares/forecast');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname + '/public'));
app.use(require('./routers/index'));

fetchForecast.then(fo => app.locals.fo = fo);

app.listen(app.get('port'), function() {
  console.log(`Now serving on port ${app.get('port')} at ${new Date()}`);
});
