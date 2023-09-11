const host = "https://www.v2ex.com";
const axios = require("axios");

// const SocksProxyAgent = require('socks-proxy-agent');

// 设置SOCKS5代理服务器的地址和端口
const proxyHost = "127.0.0.1";
const proxyPort = 3001;

// 创建一个SocksProxyAgent实例
// const agent = new SocksProxyAgent(`socks5://${proxyHost}:${proxyPort}`);
const instance = axios.create({
  baseURL: host,
  // proxy: {
  //     host: proxyHost,
  //     port: proxyPort,
  //     protocol: 'socks5:',
  //   },
});

require("dotenv").config();
const token = process.env.token;
console.log(token);
instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

const member = "api/v2/member";

async function getProfile() {
  let resp = await instance.get(`${host}/${member}`);
  console.log(resp.data);
}

getProfile();
