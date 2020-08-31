'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize,DataTypes) => {
  class TeacherClass extends Model {
  }
  TeacherClass.init({
    teacherEmail:{
      type: DataTypes.STRING,
      primaryKey:true
    },
    classCode:{
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
    modelName: 'TeacherClass',
    underscored:true,
    tableName:'TeacherClasses'
  });
  return TeacherClass;
};
