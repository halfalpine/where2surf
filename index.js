let express = require('express');
let app = express();

let wavePredictor = require('./app/js/wave-predictor.js')

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(require('./app/js/index'));

var server = app.listen(app.get('port'), function() {
  console.log(`Now serving on port ${port}`);
});

reload(server, app);
