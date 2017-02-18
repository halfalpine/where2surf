require('dotenv').config();
let express = require('express');
let reload = require('reload');
let app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(require('./app/js/routers/index'));

var server = app.listen(app.get('port'), function() {
  console.log(`Now serving on port ${app.get('port')}`);
});

reload(server, app);
