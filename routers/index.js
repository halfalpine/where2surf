require('dotenv').config();
let express = require('express');
let router = express.Router();
const fetchForecast = require('../middlewares/forecast');


router.use(function(req, res, next) {
  fetchForecast.then(fo => res.locals.fo = fo);
  next();
});

router.use(function(req, res, next) {
  console.log(res.locals.fo);
  next();
});

router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
