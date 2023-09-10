const axios = require("axios");
const cheerio = require("cheerio");
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
    await crawler(next_url);
  }
}

function parse(content) {
  const $ = cheerio.load(content);
  let result = [];
  $("ol.commentlist > li").each(function () {
    let comment_id = $(this).attr("id");
    console.log("comment-id", comment_id);
    comment_id = comment_id.split("-")[1];
    console.log("id ", comment_id);
    let author = $(this).find("div.row > div.author > strong").text();
    let content = $(this).find("div.row > div.text > p").text();
    let vote = $(this)
      .find("div.row > div.jandan-vote > span.tucao-like-container > span")
      .text();

    result.push({
      comment_id: comment_id,
      author: author,
      content: content,
      vote: Number(vote),
    });
  });
  return result;
}

async function dump_mongoDB(obj) {
  console.log(obj);
  await createDoc(obj);
}

async function main() {
  await crawler(base_url);
//   janDanStop();
}

main();
