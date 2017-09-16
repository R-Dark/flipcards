'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'flipcards',
      'deckid', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "decks",
          key: "id"
        }
      }
    )
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'flipcards',
      'deckid'
    )
  }
};
