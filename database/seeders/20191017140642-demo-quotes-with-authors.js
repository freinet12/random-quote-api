'use strict';

const faker = require('faker');

/**
 * This quotes seeder accounts for the db relationship bewteeen quotes and authors. 
 * It seeds both the quotes and authors tables
*/ 

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // create 20 fake authors
    let fakeAuthors = [];

    for (let i = 0; i < 20; i++){
      const authorData = {
        name: faker.name.findName(),
        avatar: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date()
      };

      fakeAuthors.push(authorData);
    }

    // insert fake authors to db
    await queryInterface.bulkInsert('Authors', fakeAuthors);

    // get author ids
    const authors = await queryInterface.sequelize.query(`SELECT id from AUTHORS;`);
    const authorRows = authors[0];

    // create 20 fake quotes
    let fakeQuotes = [];

    for (let i = 0; i < authorRows.length; i++){

        const quoteData = {
          description: faker.lorem.sentences(5),
          authorId: authorRows[i].id,
          createdAt: new Date(),
          updatedAt: new Date()
        };

        fakeQuotes.push(quoteData);
    }

    return await queryInterface.bulkInsert('Quotes', fakeQuotes);


  },

  down: async (queryInterface, Sequelize) => {

   await queryInterface.bulkDelete('Quotes', null, {});
   return await queryInterface.bulkDelete('Authors', null, {});

  }
};
