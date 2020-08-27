'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeacherStudent extends Model {
  }
  TeacherStudent.init({
    is_teaching: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TeacherStudent',
  });
  return TeacherStudent;
};
