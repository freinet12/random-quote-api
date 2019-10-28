var express = require('express');
var router = express.Router();
require('dotenv').config();



module.exports = ( function() {

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: process.env.APP_NAME });
  });


  return router;
})();
