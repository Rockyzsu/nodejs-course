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
  let resp = await instance.get(`${host}/${_end_point}`);
  return resp.data;
}

// JsonContent("remote", "1");
const content = JsonContent("remote", '1');
console.log(content);
