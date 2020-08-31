'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassStudent extends Model {

  }
  ClassStudent.init({

    classCode:{
      type: DataTypes.STRING,
      primaryKey:true,
    },
    studentEmail:{
      type: DataTypes.STRING,
      primaryKey:true
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'createdAt',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updatedAt',
    }
  }, {
    sequelize,
    modelName: 'ClassStudent',
    underscored:true,
    tableName: 'ClassStudents'

  });
  return ClassStudent;
};
