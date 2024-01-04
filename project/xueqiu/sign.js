const crypto = require("crypto");
const querystring = require("querystring");
const secret =
  "SEC34d14fb5acc08bba705b9a4e42428bb33967614030ebc39eb7230eb1a6d32d6b";

function getSign() {
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
