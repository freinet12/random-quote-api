const models = require('../models');
const Author = models.Author;
const Quote = models.Quote;



class authorsController
{
    // constructor will accept request and response params from the api router
    constructor(request, response){
        this.req = request;
        this.res = response;
    }
    // get all quotes
    index() 
    {
       Author.findAll().then( (authors) => {
           return this.res.json(authors);
       });

    }

    //get a specific quote
    show()
    {

    }

    //create a new quote
    store()
    {
        
    }

    // edit an existing quote
    update()
    {

    }

    //delete an existing quote

    destroy()
    {

    }

};

module.exports = (arg1, arg2) => {
    return new authorsController(arg1, arg2);
};