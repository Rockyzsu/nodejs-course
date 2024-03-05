/*
事务的基本使用
*/

const { User1 } = require("./model.js");
const sequelize = require('./setup.js')

async function basicTransaction() {
  const transaction = await sequelize.transaction();

  try {
    const user =await User1.create(
      { name: "Rocky12", age: 19, email: "rocky@1231.com" },
      { transaction }
    );
    // await user.update({ name: "Jone11", age1: 99 }, { transaction }); // 这样居然可以成功
    await user.update({ name: "Jone", age: 1024 }, { transaction }); // 这样居然可以成功
    await transaction.commit();

    console.log("执行事务成功");
  } catch (err) {
    console.log(err);
    await transaction.rollback();
  }
}

async function main() {
  await basicTransaction();
}
main();
