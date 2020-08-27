'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize) => {
  class TeacherSubject extends Model {
  }
  TeacherSubject.init({}, {
    sequelize,
    modelName: 'TeacherSubject',
  });
  return TeacherSubject;
};
