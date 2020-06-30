'use strict';
module.exports = (sequelize, DataTypes) => {
  const survey = sequelize.define('survey', {
    results: DataTypes.ARRAY(DataTypes.TEXT)
  }, {});
  survey.associate = function(models) {
    models.survey.belongsTo(models.survey_template, {foreignKey: 'template_id'});
  };
  return survey;
};