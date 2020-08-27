'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize) => {
  class ClassStudent extends Model {

  }
  ClassStudent.init({}, {
    sequelize,
    modelName: 'ClassStudent',
  });
  return ClassStudent;
};
