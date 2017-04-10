require('dotenv').config();
let express = require('express');
let router = express.Router();

router.use(function(req, res, next) {
  next();
});

router.get('/', function(req, res) {

  res.render('index');
});

module.exports = router;
