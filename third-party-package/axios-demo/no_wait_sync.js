// 程序先结束，不管异步操作是否完成
const axios = require("axios");
async function getContent() {
  console.log("start");
  const content = await axios
    .get("http://127.0.0.1/slow")
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
  console.log(content);
  console.log("end");
}

function getContent_by_callback() {
  console.log("start");
  axios
    .get("http://127.0.0.1/slow")
    .then((response) => response.data)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("end");
}
async function main() {
  //   await getContent();
  getContent_by_callback();
}

main();
