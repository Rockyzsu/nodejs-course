var WishModel = require("./wish");
task = {
  query: async () => {
    WishModel.findAll({ limit: 10 })
      .then(function (result) {
        let list = [];
        result.forEach((v, i) => {
          let obj = { id: v.id, name: v.name, content: v.content };
          list.push(obj);
        });
        console.log(list);
      })
      .then(() => {
        console.log(" ========================== query ========================");
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  create: async () => {
    for (let i = 0; i < 10; i++) {
      WishModel.create({ name: `name ${i}`, content: `content: ${i}` })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  init: async () => {
    const result = await WishModel.sync({ force: true }).then(() => {
      console.log("table has been syncd");
      return "godaddy";
    });
    console.log(result);
  },
};
async function main() {
  // await task.init();
  // await task.create();
  await task.query();
}
main();
console.log("end");
