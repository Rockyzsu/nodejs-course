const axios = require('axios');

function send_message_QiYeVX(_message) {
    // 从配置中获取信息
    const _config = config['enterprise_wechat'];
    const userid = _config['userid'];
    const agentid = _config['agentid'];
    const corpid = _config['corpid'];
    const corpsecret = _config['corpsecret'];

    // 第一步：获取 access token
    axios.get(`https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=${corpid}&corpsecret=${corpsecret}`)
   .then(response => {
        const access_token = response.data.access_token;
        // 构建发送消息的 JSON 对象
        const json_dict = {
            "touser": userid,
            "msgtype": "text",
            "agentid": agentid,
            "text": {
                "content": _message
            },
            "safe": 0,
            "enable_id_trans": 0,
            "enable_duplicate_check": 0,
            "duplicate_check_interval": 1800
        };
        // 第二步：发送消息
        return axios.post(`https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=${access_token}`, json_dict);
    })
   .then(response => {
        if (response.data.errmsg === 'ok') {
            console.log('消息发送成功');
        } else {
            console.error('消息发送失败:', response.data.errmsg);
        }
    })
   .catch(error => {
        console.error('请求出错:', error.message);
    });
}