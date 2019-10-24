const models = require('../models');
const Author = models.Author;
const Quote = models.Quote;


module.exports =  {

    // return all quotes
    async index (req, res) {

        console.log(req.query);
        const options = {
            include: [{model: Author}],
            order: [['updatedAt', 'DESC']],
            page: req.query.page ? req.query.page : 1,
            paginate: 10,
        };

        try {
            const { docs, pages, total } = await Quote.paginate(options);
            return res.status(200).json({ docs, pages, total });

        } catch (err){
            return res.status(400).json({
                'error': err.original.code
            });
        }
        
    },

    // return a single quote
    show (req, res) {

        Quote.findAll({
            include: [{model: Author}],
            order: [['updatedAt', 'DESC']],
            where: {
                id: req.params.id
            }
        })
        .then( (quote) => {
            return res.status(200).json(quote);

        }).catch( (err) => {
            return res.status(400).json(err);
        });
    },

    // return quotes by author id
    findByAuthor (req, res) {

        Quote.findAll({
            include: [{model: Author}],
            order: [['updatedAt', 'DESC']],
            where: {
                authorId: req.params.id
            }
        })
        .then( (quotes) => {
            return res.status(200).json(quotes);

        }).catch( (err) => {
            return res.status(400).json(err);
        });
    },

    // return quotes by category
    findByCategory (req, res) {
        //console.log(req.params);
        Quote.findAll({
            include: [{model: Author}],
            order: [['updatedAt', 'DESC']],
            where: {
                category: req.params.category
            }
        })
        .then( (quotes) => {
            return res.status(200).json(quotes);

        }).catch( (err) => {
            return res.status(400).json(err);
        });
    },

    update (req, res) {

    }



}


/*class quotesController 
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
};*/