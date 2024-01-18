const axios = require("axios");

const FormData = require("form-data");

async function getBalance() {
  let data = new FormData();
  data.append("member_id", "15236");

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "/api/wallet/balance",
    headers: {
      ...data.getHeaders(),
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}



async function statementlist(){

let data = JSON.stringify({
  "memberid": "",
  "trxtype": [
    1
  ],
  "startDate": null,
  "endDate": null,
  "limit": 100,
  "page": "0"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/wallet/statement/list',
  headers: { 
    'authority': 'vv-memberapi.demo4mlm.com', 
    'accept': 'application/json, text/plain, */*', 
    'accept-language': 'zh,en;q=0.9,en-US;q=0.8,zh-CN;q=0.7,zh-TW;q=0.6', 
    'access-control-allow-origin': '*', 
    'content-type': 'application/json', 
    'cookie': 'token=502f9c732f4f60b1e24cfde32b4eae8d', 
    'origin': 'https://', 
    'referer': 'https://', 
    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Windows"', 
    'sec-fetch-dest': 'empty', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-site': 'same-site', 
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});


}
async function main() {
  const results = await Promise.all[
    [...Array(100).keys()].map((item) => {
      // return getBalance();
      return statementlist();
    })
  ];

  for (let i in results) {
    console.log(i.data);
  }
}

main();
