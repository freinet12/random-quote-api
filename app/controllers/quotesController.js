'use strict';

const models = require('../models');
const Author = models.Author;
const Quote = models.Quote;


const $this = module.exports = {
    // return all quotes
    index: async  (req, res) => {

        let filters = {};

        // add authorId filter
        if (req.query.authorId){
            filters.authorId = req.query.authorId;
        }
        
        // add category filter
        if (req.query.category) {
            filters.category = req.query.category;
        }

        const options = {
            include: [{model: Author}],
            where: filters,
            order: [['updatedAt', 'DESC']],
            //page parameter used for paginating
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
    show: (req, res) => {

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

    //add a new quote
    store: (req, res) => {

        Quote.create({
            description: req.body.description,
            category: req.body.category,
            authorId: req.body.authorId
        })
        .then( (quote) => {
            return res.status(200).json(quote);

        }).catch( (err) => {
            return res.status(400).json({
                'error': err.original.code
            });
        })
        
    },


    //update an existing quote
    update: (req, res) => {

        Quote.update({
            // values to update
            description: req.body.description ? req.body.description : Quote.description,
            category: req.body.category ? req.body.category : Quote.category,
            authorId: req.body.authorId ? req.body.authorId : Quote.authorId,
        }, 
        {
            // where clause
            where: {
                id: req.params.id 
            }
        })
        .then( (quote) => {
            
         return $this.show(req, res);
         
        }).catch( (err) => {
            return res.status(400).json({
                'error': err.original.code
            });
        })

    },

    //delete an existing quote
    destroy: (req, res) => {

        Quote.destroy({
            where: {
                id: req.params.id
            }
        }).then( () => {
            return $this.index(req, res);

        }).catch( (err) => {
            return res.status(400).json({
                'error': err.original.code
            })
        });
    }


}
