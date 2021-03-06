'use strict';

const models = require('../models');
const Author = models.Author;
const Quote = models.Quote;

const $this = module.exports = {
    // return all quotes
    index: async  (req, res) => {

        let filters = {};

        //add author name filter
        if (req.query.authorName){
            filters.name = req.query.authorName;
        }

        const options = {
            order: [['updatedAt', 'DESC']],
            where: filters,
            //page parameter used for paginating
            page: req.query.page ? req.query.page : 1,
            paginate: 10,
            
        };

        try {
            const { docs, pages, total } = await Author.paginate(options);
            return res.status(200).json({ docs, pages, total });

        } catch (err){
            return res.status(400).json({
                'error': err
            });
        }
        
    },

    // return a single quote
    show: (req, res) => {


        Author.findAll({
            where: {
                id: req.params.id
            }
        })
        .then( (author) => {
            return res.status(200).json(author);

        }).catch( (err) => {
            return res.status(400).json(err);
        });
    },

    //add a new quote
    store: (req, res) => {

        Author.create({
            name: req.body.name,
            avatar: req.body.avatar
        })
        .then( (author) => {
            return res.status(200).json(author);

        }).catch( (err) => {
            return res.status(400).json({
                'error': err.original.code
            });
        })
        
    },


    //update an existing quote
    update: (req, res) => {

        Author.update({
            // values to update
            name: req.body.name ? req.body.name : Author.name,
            avatar: req.body.avatar ? req.body.avatar : Author.avatar,
        }, 
        {
            // where clause
            where: {
                id: req.params.id 
            }
        })
        .then( () => {
            
         return $this.show(req, res);
         
        }).catch( (err) => {
            return res.status(400).json({
                'error': err.original.code
            });
        })

    },

    //delete an existing author
    destroy: (req, res) => {

      //delete all quotes associated with that author? or Set the authorId for those quotes to null?
      // maybe not the best solution, but it works for now...

        // delete the author
        function deleteAuthor(){
            Author.destroy({
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
        };
        // update the quotes' authorId to null before deleting the author
        function updateQuoteFirst(){
            Quote.update({
                // values to update
                authorId: null,
            }, 
            {
                // where clause
                where: {
                    authorId: req.params.id 
                }
            })
            .then( () => {
                deleteAuthor();
            
            }).catch( (err) => {
                return res.status(400).json({
                    'error': err.original.code
                });
            })
        };
        
        if (req.query.deleteQuotes){

                if (req.query.deleteQuotes === 'true'){
                    Quote.destroy({
                        where: {
                            authorId: req.params.id
                        }
                    })
                    .then( () => {
                        deleteAuthor();
                    })
                    .catch( (err) => {
                        return res.status(400).json({
                            'error': err.original.code
                        })
                    })
                } else {
                    updateQuoteFirst();
                }  
            
        } else {
            updateQuoteFirst()
        }


        
    }


}