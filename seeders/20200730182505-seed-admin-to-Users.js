'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
         first_name: 'Admin',
         last_name: 'CODEByHacktiv8',
         username: 'admin',
         password: 'admin',
         role: 'admin',
         createdAt: new Date(),
         updatedAt: new Date()
       }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});
  }
};
