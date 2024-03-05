const { User1 } = require("./model.js");

const addUser = async () => {
  for (let i in [1, 2, 3, 4, 5]) {
    await User1.create({
      name: "jack" + i*i,
      age: 18 + i,
      email: "hh@" + i + ".com",
    });
  }
  //   await User1.create({ name: "jack3", age: 18, email: "hh@14.com" });
  console.log("add user success");
};

async function main() {
  await addUser();
}
main();
