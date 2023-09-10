const axios = require("axios");
const cheerio = require("cheerio");
const parse = require("./parse.js");
require("dotenv").config();
const db = require("./mongodb");
const DB_URI = process.env.DB_URI;
db.connect(DB_URI);
const { janDanModel, createDoc, janDanStop } = require("./models.js");

axios.defaults.headers.common["User-Agent"] =
  "Googlebot/2.1 (+http://www.google.com/bot.html)";

const base_url = "https://jandan.net/treehole";

async function crawler(url) {
  let response = await axios.get(url);
  const $ = cheerio.load(response.data);
  const urls = $('a[title="Older Comments"]');

  ret = parse(response.data);
  for (let item of ret) {
    dump_mongoDB(item);
  }
  if (urls.length > 1) {
    let next_url = $(urls[1]).attr("href");
    next_url = "https:" + next_url;
    console.log(next_url);
    // await crawler(next_url); // 递归调用,获取全部数据
  }
}


async function dump_mongoDB(obj) {
  console.log(obj);
  await createDoc(obj);
  await janDanStop();
}

async function main() {
  await crawler(base_url);
//   janDanStop();
}

main();
