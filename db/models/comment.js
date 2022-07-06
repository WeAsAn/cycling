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
    user_id: DataTypes.INTEGER,
    roure_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'Comments',
  });
  return Comment;
};
