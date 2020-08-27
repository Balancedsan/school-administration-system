'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize) => {
  class TeacherClass extends Model {
  }
  TeacherClass.init({

  }, {
    sequelize,
    modelName: 'TeacherClass',
  });
  return TeacherClass;
};
