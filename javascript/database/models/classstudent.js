'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassStudent extends Model {

  }
  ClassStudent.init({
    class_code: DataTypes.STRING,
    student_email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ClassStudent',
  });
  return ClassStudent;
};
