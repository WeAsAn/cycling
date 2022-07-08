module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Routes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      name: {
        type: Sequelize.TEXT,
      },
      length: {
        type: Sequelize.INTEGER,
      },
      city: {
        type: Sequelize.TEXT,
      },
      about: {
        type: Sequelize.TEXT,
      },
      start_point: {
        type: Sequelize.TEXT,
      },
      finish_point: {
        type: Sequelize.TEXT,
      },
      coordinates: {
        type: Sequelize.TEXT,
      },
      final_rating: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      check_rating: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      counter: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Routes');
  },
};
