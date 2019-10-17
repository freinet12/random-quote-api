'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar:{
      type: DataTypes.STRING,
      allowNull: true
    },

  }, {});

  Author.associate = function(models) {
    // associations can be defined here
    Author.hasMany(models.Quote, {
      foreignKey: 'authorId',
      as: 'quotes',
    });
  };
  return Author;
};