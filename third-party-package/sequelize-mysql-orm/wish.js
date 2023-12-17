// 定义表结构
const sequelize = require("./db");
// const db = require("./db");
var Sequelize = require("sequelize");

const Wish = sequelize.define(
  "Wish",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: { type: Sequelize.STRING(20), allowNull: false },
    content: { type: Sequelize.STRING, allowNull: false },
  },
  { underscored: true, tableName: "wish" }
);

module.exports = Wish;
