const sequelize = require("./setup.js");
const { DataTypes } = require("sequelize");

const table = {
  user_id: {
    type: DataTypes.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  age: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
};

const User1 = sequelize.define("User1", table, {
  freezeTableName: true,
});

User1.sync(); // 需要await 之后 了 { force: true } 选项，Sequelize 将删除现有表并重新创建它们

module.exports = { User1 };
