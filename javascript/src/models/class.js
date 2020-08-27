'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      Class.belongsToMany(models.Student, {
        through: 'ClassStudent',
      });

      Class.belongsToMany(models.Teacher, {
        through : 'TeacherClass',
      })

    }
  }
  Class.init(
    {
      class_code: DataTypes.STRING,
      class_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Class',
    }
  );
  return Class;
};
