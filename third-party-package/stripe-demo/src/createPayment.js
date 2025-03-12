require("dotenv").config();
const stripe = require("stripe")(process.env.secret_key);

const func = async () => {
  // TODO

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 888,
    currency: "cny",
    
    // automatic_payment_methods: {
    //   enabled: true,
    // },
    payment_method_types: ['alipay'],

  });

  console.log(paymentIntent);
};

(async () => {
  await func();
})();
