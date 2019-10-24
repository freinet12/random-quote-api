const express = require('express');
const quotesCtrl = require('../app/controllers/quotesController');
const authorsCtrl = require('../app/controllers/authorsController');

module.exports = ( function() {
    'use strict';
    const router = express.Router(); 

    /**
     * All Quote Routes here
    */ 

    // get all quotes
    router.get('/quotes', quotesCtrl.index);
    // get a single quote by id
    router.get('/quotes/:id', quotesCtrl.show);
    // get quotes by author
    router.get('/quotes/author/:id', quotesCtrl.findByAuthor);
    // get quotes by category
    router.get('/quotes/category/:category', quotesCtrl.findByCategory);



    /**
     *  All Author Routes here
    */

    // get all authors
    //router.get('/authors', authorsCtrl.index);
    //get a single author by id
    //router.get('authors/:id', authorsCtrl.show);







    return router;
})();


/*
// get all quotes
router.get('/quotes', (req, res) => {
    return quotesCtrl(req, res).index();
});

// get all authors
router.get('/authors', (req, res) => {
    return authorsCtrl(req, res).index();
});




module.exports = router;*/



