require('dotenv').config();

module.exports = {

    "development": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "dialect": process.env.DB_CONNECTION,
      "operatorsAliases": false
    },
    "test": {
      "username": process.env.TEST_DB_USERNAME,
      "password": process.env.TEST_DB_PASSWORD,
      "database": process.env.TEST_DB_DATABASE,
      "host": process.env.TEST_DB_HOST,
      "dialect": process.env.TEST_DB_CONNECTION,
      "operatorsAliases": false
    },
    "production": {
      "username": process.env.PROD_DB_USERNAME,
      "password": process.env.PROD_DB_PASSWORD,
      "database": process.env.PROD_DB_DATABASE,
      "host": process.env.PROD_DB_HOST,
      "dialect": process.env.PROD_DB_CONNECTION,
      "operatorsAliases": false
    }

};