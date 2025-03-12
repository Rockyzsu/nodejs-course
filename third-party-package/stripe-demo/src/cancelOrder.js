require("dotenv").config();
const stripe = require("stripe")(process.env.secret_key);

const func = async () => {
  // TODO
  const paymentIntent = await stripe.paymentIntents.cancel(
    "pi_3R0gjFGxRLjtMwcK1c43mDtc" // paymentIntent ID
  );
  console.log(paymentIntent);
};
// console.log("cancelOrder.js");
// console.log("=============");
(async () => {
  await func();
})();
