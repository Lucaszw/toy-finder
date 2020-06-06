'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("surveys", {
      "id": {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      "results": Sequelize.ARRAY(Sequelize.TEXT),
      "createdAt": Sequelize.DATE(),
      "updatedAt": Sequelize.DATE()
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("surveys")
  }
};
