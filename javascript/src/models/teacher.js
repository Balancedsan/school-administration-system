'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    static associate(models) {
      Teacher.belongsToMany(models.Class, {
        through: 'TeacherClass',
      });

      Teacher.belongsToMany(models.Student, {
        through: 'TeacherStudent',
      });
    }
  }
  Teacher.init(
    {
      teacherEmail: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      teacherName: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        field: 'createdAt'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updatedAt'
      }
    },
    {
      sequelize,
      modelName: 'Teacher',
      underscored: true,
      tableName: 'Teachers',
    }
  );
  return Teacher;
};
