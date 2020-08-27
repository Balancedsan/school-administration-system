'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {

    static associate(models) {
      Teacher.belongsToMany(models.Class,{
        through: 'TeacherClass'
      })

      Teacher.belongsToMany(models.Student, {
        through: 'TeacherStudent'
      })
    }
  }
  Teacher.init({
    teacher_email: DataTypes.STRING,
    teacher_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};
