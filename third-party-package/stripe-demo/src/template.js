require("dotenv").config();
const stripe = require("stripe")(process.env.secret_key);

const func = async () => {
    // TODO

};

(async () => {
  await func();
})();
