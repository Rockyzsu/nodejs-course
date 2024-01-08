require("dotenv").config();
const fs = require("fs");
const axios = require("axios");
const {
  readCookies,
  writeReplyID,
  readReplyID,
  readStock,
  writeStock,
} = require("./utils");
const sendMsgByDingDing = require("./sendDing");

const INTERVAL = 3000;

const sent_content_id_list = readReplyID();
// console.log(sent_content_id_list);

var stock_list = [
  readStock(process.env.user_id1),
  readStock(process.env.user_id2),
];

async function monitorReply(user_id, secret, access_token) {
  const cookies = readCookies();
  const response = await axios.get(
    "https://xueqiu.com/v4/statuses/user_timeline.json",
    {
      params: {
        page: "1",
        user_id: user_id,
      },

      headers: {
        Accept: "*/*",
        "Accept-Language": "zh,en;q=0.9,en-US;q=0.8,zh-CN;q=0.7,zh-TW;q=0.6",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        Cookie: cookies,
        Pragma: "no-cache",
        Referer: `https://xueqiu.com/u/${user_id}`,
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "elastic-apm-traceparent":
          "00-639c99d729c9ac92c84d0d6478323f4a-b49b2f70fa7e080d-00",
        "sec-ch-ua":
          '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
      },
    }
  );

  if (response.status !== 200) {
    console.log("error");
    return;
  }

  const resp_data = response.data;
  // console.log('我的输出')
  // console.log(sent_content_id_list);
  resp_data.statuses.forEach(async (reply) => {
    if (!sent_content_id_list.includes(reply.id.toString())) {
      description = reply.description.replace(/<[^>]+>/g, "");
      sent_content_id_list.push(reply.id.toString());
      console.log(reply.id, description);
      writeReplyID(reply.id + "\n");
      await sendMsgByDingDing(secret, access_token, description); 
    }
  });
}

async function monitorUserMulti() {
  console.log(new Date());

  await monitorReply(
    process.env.user_id1,
    process.env.secret1,
    process.env.access_token1
  );
  await monitorReply(
    process.env.user_id2,
    process.env.secret2,
    process.env.access_token2
  );
}

async function monitorStock(user_id, secret, access_token, idx) {
  const cookies = readCookies();
  const response = await axios.get(
    "https://stock.xueqiu.com/v5/stock/portfolio/stock/list.json",
    {
      params: {
        pid: "-1",
        category: "1",
        size: "1000",
        uid: user_id,
      },
      headers: {
        authority: "stock.xueqiu.com",
        accept: "application/json, text/plain, */*",
        "accept-language": "zh,en;q=0.9,en-US;q=0.8,zh-CN;q=0.7,zh-TW;q=0.6",
        "cache-control": "no-cache",
        cookie: cookies,
        origin: "https://xueqiu.com",
        pragma: "no-cache",
        referer: `https://xueqiu.com/u/${user_id}`,
        "sec-ch-ua":
          '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    }
  );

  if (response.status !== 200) {
    console.log("error");
    return;
  }

  const resp_data = response.data;
  const stocks_list = resp_data.data.stocks;
  // console.log('我的输出')
  // console.log(stock_list);
  stocks_list.forEach(async (stockItem) => {
    if (!(stock_list[idx].includes(stockItem.symbol))) {
      // description = reply.description.replace(/<[^>]+>/g, "");
      stock_list[idx].push(stockItem.symbol);
      // console.log(stockItem.name);
      writeStock(user_id, stockItem.symbol + "\n");
      await sendMsgByDingDing(secret, access_token, stockItem.name);
    }
  });
}

async function monitorStockMulti() {
  console.log(new Date());
  await monitorStock(
    process.env.user_id1,
    process.env.secret1,
    process.env.access_token1,
    0
  );
  await monitorStock(
    process.env.user_id2,
    process.env.secret2,
    process.env.access_token2,
    1
  );
}

async function main() {
  await monitorUserMulti();
  await monitorStockMulti();
}

setInterval(main, INTERVAL);
// main()
