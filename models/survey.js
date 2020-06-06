'use strict';
module.exports = (sequelize, DataTypes) => {
  const survey = sequelize.define('survey', {
    results: DataTypes.ARRAY(DataTypes.TEXT)
  }, {});
  survey.associate = function(models) {
    // associations can be defined here
  };
  return survey;
};