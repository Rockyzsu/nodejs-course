require("dotenv").config();
const stripe = require("stripe")(process.env.vti_secret_key);

const func = async () => {
  const topup = await stripe.topups.create({
    amount: 2000,
    currency: "usd",
    description: "Top-up for Jenny Rosen",
    statement_descriptor: "Top-up",
  });
  console.log(topup);
};

(async () => {
  await func();
})();
