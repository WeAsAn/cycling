const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Route, Comment }) {
      User.hasMany(Route, { foreignKey: 'user_id' });
      User.belongsToMany(Route, { through: Comment, foreignKey: 'user_id', otherKey: 'roure_id' });
      User.hasMany(Comment, { foreignKey: 'user_id' });
      // define association here
    }
  }

  User.init({
    login: {
      unique: true,
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
  });
  return User;
};
