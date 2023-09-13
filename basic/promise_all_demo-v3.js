const axios = require("axios");

const url ='https://baidu.com'

async function fetch() {
  const task1 =  axios.get(url);

  const task2 =  axios.get(url);

  const [result1, result2] = await Promise.all([task1, task2]);
  console.log(result1.data);
  console.log(result2.data);

  console.log("End");
}

async function wrapper() {
  await fetch();
}

wrapper();

