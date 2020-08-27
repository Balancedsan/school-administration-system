'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    static associate(models) {
      Subject.belongsToMany(models.Teacher,{
        through: 'TeacherSubject',
      });

    }
  }
  Subject.init({
    subject_code: DataTypes.STRING,
    subject_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subject',
  });
  return Subject;
};
