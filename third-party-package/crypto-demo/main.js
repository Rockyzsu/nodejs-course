const crypto = require("crypto");
const encrypt_str = crypto.randomBytes(16).toString("hex");
console.log(encrypt_str.length);
console.log(encrypt_str);
console.log('\n')
const password = '123456'
//[rocky] 加密
var salt = crypto.randomBytes(16).toString("hex");
var hash = crypto
  .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
  .toString(`hex`);

console.log(hash);
