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
  let value = await client.set("key", "12345");
  console.log(value); // "OK"

  value = await client.get("key");
  console.log(value); // "12345"

  await client.disconnect();
}

operation();
