'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('survey_templates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      categories: Sequelize.ARRAY(Sequelize.TEXT),
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
    await queryInterface.addColumn('surveys', 'template_id', Sequelize.INTEGER);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('surveys', 'template_id');
    await queryInterface.dropTable('survey_templates');
  }
};