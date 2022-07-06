'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Comment}) {
      // define association here
      Route.belongsTo(User, { foreignKey: 'user_id' });
      Route.belongsToMany(User, { through: Comment, foreignKey: 'roure_id', otherKey: 'user_id' });
      Route.hasMany(Comment, { foreignKey: 'roure_id' });
    }
  }
  Route.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    length: DataTypes.INTEGER,
    city: DataTypes.TEXT,
    about: DataTypes.TEXT,
    final_rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Route',
    tableName: 'Routes',
  });
  return Route;
};