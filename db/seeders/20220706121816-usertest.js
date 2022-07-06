module.exports = {
  async up(queryInterface, Sequelize) {
    const arr = [
      {
        login: 'Admin',
        password: 'qwertyu',
        email: 'admin@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        login: 'NewUser',
        password: 'qwertyu',
        email: 'my@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        login: 'MainUser',
        password: '@@12345',
        email: 'main@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        login: 'SuperUser',
        password: '1234567',
        email: 'super@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Users', arr, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  },
};
