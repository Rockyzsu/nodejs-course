const fs = require("fs");
const axios = require("axios");
const sendDing = require("./send_ding");

const pattern = /\d/;
const INTERVAL = 1000;
const USER_ID = "6567596110";
const sent_content_id_list = readReplyID();

function readCookies() {
  const cookie = fs.readFileSync("./cookies.txt", "utf8");
  return cookie;
}

function writeReplyID(id) {
  try {
    fs.writeFileSync("./reply_id.txt", id, { flag: "a" }, "utf8");
  } catch (e) {
    console.log(e);
  }
}

function readReplyID() {
  try {
    const init_list = [];
    const reply_id_list = fs.readFileSync("./reply_id.txt", "utf8");
    const result = reply_id_list.split("\n");
    result.forEach((id) => {
      // console.log(id);
      if (pattern.test(id)) {
        init_list.push(id);
      }
    });
    // console.log(init_list);
    return result;
  } catch (e) {
    console.error(e);
  }
}

async function monitorReply() {
  console.log(new Date());
  const cookies = readCookies();
  const response = await axios.get(
    "https://xueqiu.com/v4/statuses/user_timeline.json",
    {
      params: {
        page: "1",
        user_id: USER_ID,
      },
      headers: {
        Accept: "*/*",
        "Accept-Language": "zh,en;q=0.9,en-US;q=0.8,zh-CN;q=0.7,zh-TW;q=0.6",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        Cookie: cookies,
        Pragma: "no-cache",
        Referer: "https://xueqiu.com/u/6567596110",
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
      await sendDing(description);
    }
  });
}

setInterval(monitorReply, INTERVAL);
