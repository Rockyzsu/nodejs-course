const crypto = require('crypto');
const encrypt_str = crypto.randomBytes(16).toString("hex");
console.log(encrypt_str.length);
