'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TeacherSubjects', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      teacher_email: {
        type: Sequelize.STRING,
        primaryKey: true,
        onDelete: 'cascade',
        references: {
          model: 'Teachers',
          key: 'teacher_email',
        },
      },
      subject_code: {
        type: Sequelize.STRING,
        primaryKey: true,
        onDelete: 'cascade',
        references: {
          model: 'Subjects',
          key: 'subject_code'
        }
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('TeacherSubjects');
  },
};
