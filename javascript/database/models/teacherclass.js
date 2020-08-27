'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeacherClass extends Model {
  }
  TeacherClass.init({
    teacher_email: DataTypes.STRING,
    class_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TeacherClass',
  });
  return TeacherClass;
};
