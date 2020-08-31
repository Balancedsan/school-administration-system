'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    static associate(models) {
      Subject.belongsToMany(models.Teacher,{
        through: 'TeacherSubject',
      });

    }
  }
  Subject.init({
    subjectCode: {
      type: DataTypes.STRING,
      primaryKey:true
    },
    subjectName: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updatedAt'
    }
  }, {
    sequelize,
    modelName: 'Subject',
    underscored:true,
    tableName: 'Subjects'
  });
  return Subject;
};
