'use strict';
module.exports = (sequelize, DataTypes) => {
  const Quote = sequelize.define('Quote', {
    description: {
      type: DataTypes.TEXT('long'),
      allowNull: false
    },

  }, {});
  Quote.associate = function(models) {
    // associations can be defined here
    Quote.belongsTo(models.Author, {
      foreignKey: 'authorId',
      onDelete: 'CASCADE',
    });
  };
  return Quote;
};