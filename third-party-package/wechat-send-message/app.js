const axios = require("axios");
require("dotenv").config();
// const config = process.env.enterprise_wechat; // 替换为你的配置文件路径
const userid = process.env.userid;
const agentid = process.env.agentid;
const corpid = process.env.corpid;
const corpsecret = process.env.corpsecret;

async function sendMessageQiYeVX(message) {
  try {
    // const { userid, agentid, corpid, corpsecret } = config.enterprise_wechat;

    // 获取 Access Token
    const tokenRes = await axios.get(`https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=${corpid}&corpsecret=${corpsecret}`);
    const accessToken = tokenRes.data.access_token;

    // 构造消息体
    const payload = {
      touser: userid,
      msgtype: "text",
      agentid: agentid,
      text: {
        content: message,
      },
      safe: 0,
      enable_id_trans: 0,
      enable_duplicate_check: 0,
      duplicate_check_interval: 1800,
    };

    // 发送消息
    const sendRes = await axios.post(`https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=${accessToken}`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return sendRes.data.errmsg === "ok";
  } catch (error) {
    console.error("企业微信消息发送失败:", error.response?.data || error.message);
    return false;
  }
}

// 使用示例
// sendMessageQiYeVX("测试消息").then((result) => console.log(result));

async function main() {
  await sendMessageQiYeVX("测试消息-----");
}

main();
