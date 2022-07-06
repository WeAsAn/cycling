module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const arr = [
      {
        user_id: 2,
        roure_id: 1,
        comment: 'Отличный маршрут, но очень сложный',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 3,
        roure_id: 2,
        comment: 'Не ново, но красиво',
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 3,
        roure_id: 4,
        comment: 'Маршрут не интересен',
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 2,
        roure_id: 2,
        comment: 'Прекрасный маршрут по прекрасному Пушкину',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Comments', arr, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
