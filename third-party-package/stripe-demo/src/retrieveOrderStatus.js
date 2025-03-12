require("dotenv").config();
const stripe = require("stripe")(process.env.secret_key);

const func = async () => {
  // work
  const paymentIntent = await stripe.paymentIntents.update("pi_3R0fzRGxRLjtMwcK01VIlIif", {
    metadata: {
      order_id: "6735",
    },
  });

  console.log(paymentIntent);
};

const listFunc = async () => {
  //   const paymentIntent = await stripe.paymentIntents.list({ limit: 3 });
  //   console.log(paymentIntent);
  let count =0;
  for await (let paymentIntent of stripe.paymentIntents.list({ limit: 3 })) {
    console.log("===================", count);
    console.log(paymentIntent);
    console.log("===================");
    count += 1;
  }
};

(async () => {
  //   await func();
  await listFunc();
})();
