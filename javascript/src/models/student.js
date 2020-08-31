'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      Student.belongsToMany(models.Class, {
        through: 'ClassStudent',
      });

      Student.belongsToMany(models.Teacher, {
        through: 'TeacherStudent',
      });
    }
  }
  Student.init(
    {
      studentEmail: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      studentName: DataTypes.STRING,
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
      modelName: 'Student',
      underscored: true,
      tableName: 'Students',
    }
  );
  return Student;
};
