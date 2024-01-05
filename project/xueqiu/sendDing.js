const axios = require("axios"); // 导入axios库
const getSign = require("./sign"); // 导入签名算法

async function sendMsgByDingDing(secret,access_token,content) {
  const { timestamp, sign } = getSign(secret);

  // 定义要发送的消息内容
  const messageContent = {
    msgtype: "text",
    text: {
      content: content,
    },
  };

  // 构建POST请求参数
  const postData = JSON.stringify(messageContent);

  // 设置请求头部信息
  const headers = {
    "Content-Type": "application/json;charset=utf-8",
  };

  // 发起HTTP POST请求
  await axios({
    method: "post",
    url: `https://oapi.dingtalk.com/robot/send?access_token=${access_token}&timestamp=${timestamp}&sign=${sign}`,

    data: postData,
    headers: headers,
  })
    .then((response) => {
      console.log(`成功发送消息到钉钉群组！`);
      console.log(response.data);
    })
    .catch((error) => {
      console.error(`发送消息失败：${error}`);
    });

}


module.exports = sendMsgByDingDing;
