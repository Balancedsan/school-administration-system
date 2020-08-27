'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeacherStudent extends Model {
  }
  TeacherStudent.init({
    teacher_email: DataTypes.STRING,
    student_email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TeacherStudent',
  });
  return TeacherStudent;
};
