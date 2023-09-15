const axios = require("axios");
async function visitWeb(url) {
  result = await axios.get(url);
  //   console.log(result);
  ret = result.data;
  //   console.log(ret);
  return ret;
}
const host = "http://127.0.0.1";

const urlList = [`${host}/user`, `${host}/score`, `${host}/age`];

async function main() {
  const result_list = urlList.map(async (item) => {
    data = await visitWeb(item);
    return data.value;
  });

  const result = await Promise.all(result_list);
  console.log("wait");
  console.log(result);
  return result
  //   return result;
  //   console.log(result_list);

  //   return result_list;
}

result = main();
console.log('outside',result)

console.log('end');
// console.log(typeof result)
// console.log(result);
// main().then((data) => {
//   console.log(data);
//   console.log("End");
// });

async function nextfun() {
  result = await main();
  console.log(result);
}

// nextfun();
