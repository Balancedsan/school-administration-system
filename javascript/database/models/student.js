'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {

    static associate(models) {
      Student.belongsToMany(models.ClassStudent,{
        through: 'ClassStudent',
        foreignKey: 'student_email'
      })
    }
  }
  Student.init({
    student_code: DataTypes.STRING,
    student_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};
