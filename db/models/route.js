const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Comment }) {
      // define association here
      Route.belongsTo(User, { foreignKey: 'user_id' });
      Route.belongsToMany(User, { through: Comment, foreignKey: 'roure_id', otherKey: 'user_id' });
      Route.hasMany(Comment, { foreignKey: 'roure_id' });
    }
  }
  Route.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.TEXT,
    },
    length: {
      type: DataTypes.INTEGER,
    },
    city: {
      type: DataTypes.TEXT,
    },
    about: {
      type: DataTypes.TEXT,
    },
    start_point: {
      type: DataTypes.TEXT,
    },
    finish_point: {
      type: DataTypes.TEXT,
    },
    coordinates: {
      type: DataTypes.TEXT,
    },
    final_rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    check_rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    counter: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  }, {
    sequelize,
    modelName: 'Route',
    tableName: 'Routes',
  });
  return Route;
};
