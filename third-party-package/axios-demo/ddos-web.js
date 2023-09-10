const axios = require("axios");
axios.defaults.headers.common["User-Agent"] =
  "Googlebot/2.1 (+http://www.google.com/bot.html)";

async function crawler() {
  try {
    let task = [];
    console.log(new Date().getTime());
    console.time("run");

    for (let i = 1; i < 100; i++) {
      const url = `https://licai.cofool.com/ask/new-${i}.html`;
      //   const response = await axios.get({
      //     url: url,
      //     method: "get",
      //     headers: {
      //       'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      //     },
      //   }); // 如果这里不用await，那么response就是一个Promise对象， response.data是空的
      const response = await axios.get(url);
      task.push(response);
    }

    const result = await Promise.all(task);
    for (let item of result) {
      ret_obj = item.data.length;
      console.log(ret_obj);
    }
    console.timeEnd("run");
    console.log(new Date().getTime());
  } catch (error) {
    console.error(error);
  }
}
for (let j = 0;j<10; j++) {
  crawler();
}
