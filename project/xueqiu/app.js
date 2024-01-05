require("dotenv").config();
const fs = require("fs");
const axios = require("axios");
const { readCookies, writeReplyID, readReplyID } = require("./utils");
const sendMsgByDingDing = require("./sendDing");


const INTERVAL = 1000;

const sent_content_id_list = readReplyID();

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

  resp_data.statuses.forEach(async (reply) => {
    if (!sent_content_id_list.includes(reply.id)) {
      description = reply.description.replace(/<[^>]+>/g, "");
      sent_content_id_list.push(reply.id);
      console.log(reply.id, description);
      writeReplyID(reply.id + "\n");
      await sendMsgByDingDing(secret, access_token, description);
    }
  });
}

async function monitorMultiUser() {
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

setInterval(monitorMultiUser, INTERVAL);
