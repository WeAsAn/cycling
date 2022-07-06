const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Route }) {
      // define association here
      Comment.belongsTo(User, { foreignKey: 'user_id' });
      Comment.belongsTo(Route, { foreignKey: 'roure_id' });
    }
  }
  Comment.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    roure_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Routes',
        key: 'id',
      },
    },
    comment: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'Comments',
  });
  return Comment;
};
