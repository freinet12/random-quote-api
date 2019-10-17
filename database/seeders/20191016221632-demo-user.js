'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    // bulk insert 20 seed users to the db
    let fakeUsers = [];

    for (let i = 0; i < 20; i++){

        const seedData = {
          name: faker.name.findName(),
          email: faker.internet.email(),
          api_token: faker.random.alphaNumeric(),
          createdAt: new Date(),
          updatedAt: new Date()
        };

        fakeUsers.push(seedData);
    } 

    return queryInterface.bulkInsert('Users', fakeUsers);

  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Users', null, {});
  }
};
