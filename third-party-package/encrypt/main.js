const bcrypt = require('bcryptjs');

bcrypt.hash("password", 10, function(err, hash) {
    if (err) {
      console.error(err);
      return;
    }
    console.log('哈希后的密码:', hash);
  });

console.log("end")