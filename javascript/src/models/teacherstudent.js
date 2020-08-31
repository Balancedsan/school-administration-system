'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeacherStudent extends Model {}
  TeacherStudent.init(
    {
      isTeaching: {
        type: DataTypes.BOOLEAN,
      },
      teacherEmail: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      studentEmail: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'createdAt',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updatedAt',
      },
    },
    {
      sequelize,
      modelName: 'TeacherStudent',
      underscored: true,
      tableName: 'TeacherStudents',
    }
  );
  return TeacherStudent;
};
