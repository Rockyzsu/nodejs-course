const crypto = require("crypto");
const querystring = require("querystring");
;

function getSign(secret) {
  const timestamp = Date.now().toString();
  const stringToSign = `${timestamp}\n${secret}`;
  const hmacCode = crypto
    .createHmac("sha256", secret)
    .update(stringToSign)
    .digest("base64");
  const sign = encodeURIComponent(hmacCode);
  return { timestamp, sign };
}
module.exports = getSign;
