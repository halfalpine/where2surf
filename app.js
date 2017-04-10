const express = require('express');
const app = express();
const cacheForecast = require('./middlewares/cache-forecast');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'views');

cacheForecast(app);
setInterval(cacheForecast, 3000, app);

app.use(express.static(__dirname + '/public'));
//  app.use(require('./routers/index'));

app.listen(app.get('port'), function() {
  console.log(`Now serving on port ${app.get('port')} at ${new Date()}`);
});
