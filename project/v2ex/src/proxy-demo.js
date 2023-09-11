const axios = require("axios");
const SocksProxyAgent = require("socks-proxy-agent");

const httpsAgent = new SocksProxyAgent.SocksProxyAgent(
  "socks5://127.0.0.1:3001"
);

axios
  .get("https://www.v2ex.com/", { httpsAgent })
  .then(function (response) {
    console.log("start");
    console.log(response);
    console.log("start");
  })
  .catch(function (error) {
    console.log(error);
  });

//post json

// const headerJSON = {
//     "Content-Type": "application/json"
// }
// axios.post("www.google.com", JSON.stringify(data),
// {headers: headerJSON,httpsAgent}).then(function (response) {
//     console.log(response)
// }).catch(function (error) {
//     console.log(error)
// });
