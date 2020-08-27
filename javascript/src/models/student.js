'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {

    static associate(models) {
      Student.belongsToMany(models.Class,{
        through: 'ClassStudent',
      })

      Student.belongsToMany(models.Teacher,{
        through: 'TeacherStudent'
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
