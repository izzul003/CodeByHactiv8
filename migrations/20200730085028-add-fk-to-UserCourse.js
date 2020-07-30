'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('UserCourses', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_UserId',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }).then(()=>{
      return queryInterface.addConstraint('UserCourses', {
        fields: ['CourseId'],
        type: 'foreign key',
        name: 'custom_fkey_constraint_CourseId',
        references: { //Required field
          table: 'Courses',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('UserCourses', 'custom_fkey_constraint_UserId', {})
      .then(()=>{
        return queryInterface.removeConstraint('UserCourses', 'custom_fkey_constraint_CourseId', {})
      })
  }
};
