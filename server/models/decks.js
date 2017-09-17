'use strict';
module.exports = function(sequelize, DataTypes) {
  var decks = sequelize.define('decks', {
    topic: DataTypes.STRING,
    userid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return decks;
};
