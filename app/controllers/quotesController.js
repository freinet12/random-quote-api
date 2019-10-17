const models = require('../models');
const Author = models.Author;
const Quote = models.Quote;


class quotesController 
{
    // constructor will accept request and response params from the api router
    constructor(request, response){
        this.req = request;
        this.res = response;
    }
    // get all quotes
    index() 
    {
       Quote.findAll({
           include: [{model: Author}]

       }).then( (quotes) => {
           return this.res.json(quotes);
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
    return new quotesController(arg1, arg2);
};