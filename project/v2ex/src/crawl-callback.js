require("dotenv").config();
const token = process.env.token;
const host = "https://www.v2ex.com";
const axios = require("axios");

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
async function getContent() {
  const content = await JsonContent("remote", "1");
  console.log(content);
}

getContent();
console.log('end')
