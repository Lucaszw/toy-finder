'use strict';
module.exports = (sequelize, DataTypes) => {
  const surveyTemplate = sequelize.define('survey_template', {
    name: DataTypes.TEXT,
    categories: DataTypes.ARRAY(DataTypes.TEXT)
  }, {});
  surveyTemplate.associate = function(models) {
    models.survey_template.hasMany(models.survey, {foreignKey: 'template_id'});
  };
  return surveyTemplate;
};