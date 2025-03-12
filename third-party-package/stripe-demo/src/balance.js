require("dotenv").config();
const stripe = require("stripe")(process.env.vti_secret_key);

const func = async () => {
    const balance = await stripe.balance.retrieve();
    console.log(balance);
};
(async () => {
  await func();
})();



