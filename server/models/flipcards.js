'use strict';
module.exports = function(sequelize, DataTypes) {
  var flipcards = sequelize.define('flipcards', {
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    deckid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return flipcards;
};
