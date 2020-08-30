'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TeacherStudents', {
      is_teaching: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      teacher_email: {
        type: Sequelize.STRING,
        allowNull: true,
        onDelete: 'cascade',
        primaryKey: true,
        references: {
          model: 'Teachers',
          key: 'teacher_email'
        },
      },
      student_email: {
        type: Sequelize.STRING,
        allowNull: true,
        primaryKey: true,
        onDelete: 'cascade',
        references: {
          model : 'Students',
          key: 'student_email'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('TeacherStudents');
  },
};
