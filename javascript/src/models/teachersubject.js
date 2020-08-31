'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize,DataTypes) => {
  class TeacherSubject extends Model {

  }
  TeacherSubject.init({
    teacherEmail:{
      type:DataTypes.STRING,
      primaryKey:true
    },
    subjectCode: {
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
    modelName: 'TeacherSubject',
    underscored:true,
    tableName:'TeacherSubjects'

  });
  return TeacherSubject;
};
