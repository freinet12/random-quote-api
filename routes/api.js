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
    //ad a new quote
    router.post('/quotes', quotesCtrl.store);
    //edit an existing quote
    router.patch('/quotes/:id', quotesCtrl.update);
    //delete a quote
    router.delete('/quotes/:id', quotesCtrl.destroy);


    /**
     *  All Author Routes here
    */

    // get all authors
    router.get('/authors', authorsCtrl.index);
    //get a single author by id
    router.get('/authors/:id', authorsCtrl.show);
    //add a new author
    router.post('/authors', authorsCtrl.store);
    //edit an existing quote
    router.patch('/authors/:id', authorsCtrl.update);
    //delete a quote
    router.delete('/authors/:id', authorsCtrl.destroy);




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



