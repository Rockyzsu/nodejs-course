require("dotenv").config();
const token = process.env.token;
const topic = process.env.topic;
const host = "https://www.v2ex.com";
const axios = require("axios");
const parse = require("./parse");
const { createDoc, v2Stop } = require("./models");
// const instance = axios.create({
//   baseURL: host,
// });

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

async function JsonContent(end_point, page) {
  let _end_point = `${host}/api/v2/nodes/${end_point}/topics?p=${page}`;
  console.log(_end_point);
  try {
    let resp = await axios.get(_end_point);
    let content = resp.data;
    // console.log(content);
    return content;
  } catch (e) {
    console.log(e);
  }
}

// JsonContent("remote", "1");
async function getContent(topic) {
  for (let i = 1; i < 50; i++) {
    const content = await JsonContent(topic, i);
    const js_list = parse(content);
    // console.log(content);
    js_list.forEach((item) => {
      // console.log(item);
      item["topic"] = topic;
      createDoc(item);
    });
  }
  v2Stop();
}

// const topics = "remote";
getContent(topic);
console.log("end");
