'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ClassStudents', {
      student_email: {
        allowNull: false,
        primaryKey: true,
        onDelete: 'cascade',
        type: Sequelize.STRING,
        references:{
          model: 'Students',
          key: 'student_email'
        }
      },
      class_code:{
        allowNull:false,
        type: Sequelize.STRING,
        onDelete: 'cascade',
        primaryKey:true,
        references: {
          model : 'Classes',
          key: 'class_code'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('ClassStudents');
  }
};
