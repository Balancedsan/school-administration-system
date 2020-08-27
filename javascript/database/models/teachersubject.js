'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeacherSubject extends Model {
  }
  TeacherSubject.init({
    teacher_email: DataTypes.STRING,
    subject_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TeacherSubject',
  });
  return TeacherSubject;
};
