var express = require('express');
var router = express.Router();

const quotesCtrl = require('../app/controllers/quotesController');
const authorsCtrl = require('../app/controllers/authorsController');

// gett all quotes
router.get('/quotes', (req, res) => {
    return quotesCtrl(req, res).index();
});

// get all authors
router.get('/authors', (req, res) => {
    return authorsCtrl(req, res).index();
});




module.exports = router;



