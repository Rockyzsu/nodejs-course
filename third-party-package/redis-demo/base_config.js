require("dotenv").config();
const redis = require("redis");
const url = `redis://:${process.env.password}@${process.env.host}:${process.env.port}/0`;
console.log(url);
async function operation() {
  const client = await redis
    .createClient({
      // host: process.env.host,
      // port: process.env.port,
      // password: process.env.password,
      // db: 0,
      // legacyMode: true,
      url: url,
    })
    .connect();

  // await client.connect();
  await client.set("key", "12345");

  // // 获取键对应的值
  // client.get("key", (error, result) => {
  //   if (error) {
  //     console.error(error);
  //   } else {
  //     console.log(result);
  //   }
  // });
  await client.disconnect();
}

operation();
