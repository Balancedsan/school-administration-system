'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      Class.belongsToMany(models.Student, {
        through: 'ClassStudent',
      });

      Class.belongsToMany(models.Teacher, {
        through: 'TeacherClass',
      });
    }
  }
  Class.init(
    {
      classCode: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      className: {
        type:DataTypes.STRING,
        allowNull:false
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'createdAt',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updatedAt',
      }
    },
    {
      sequelize,
      modelName: 'Class',
      underscored: true,
      tableName: 'Classes',
    }
  );
  return Class;
};
