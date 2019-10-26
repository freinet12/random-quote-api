'use strict';

const sequelizePaginate = require('sequelize-paginate');

module.exports = (sequelize, DataTypes) => {
  const Quote = sequelize.define('Quote', {
    description: {
      type: DataTypes.TEXT('long'),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true
    }

  }, {});
  Quote.associate = function(models) {
    // associations can be defined here
    Quote.belongsTo(models.Author, {
      foreignKey: 'authorId',
      onDelete: 'CASCADE',
    });
  };
  sequelizePaginate.paginate(Quote);
  return Quote;
};