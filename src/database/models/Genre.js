const { config } = require("dotenv");
const { sequelize } = require(".");

module.exports = (sequelize, dataTypes) => {
  const alias = "Genre";

  const cols = {
    id: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    ranking: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      unique: true,
    },
    active: {
      type: dataTypes.BOOLEAN,
      allowNull: false,
      default: 1,
    },
  };

  const config = {
    tableName: "genres",
    timestamps: true,
    underscored: true,
  };

  const genre = sequelize.define(alias, cols, config);

  return genre;
};
