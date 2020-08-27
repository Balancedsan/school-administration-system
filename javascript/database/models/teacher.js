'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {

    static associate(models) {
      Teacher.belongsToMany(models.TeacherClass,{
        through: 'TeacherClass',
        foreignKey: 'class_code'
      })

      Teacher.belongsToMany(models.TeacherStudent, {
        through: 'TeacherStudent',
        foreignKey: 'student_email'
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
