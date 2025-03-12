require("dotenv").config();
const stripe = require("stripe")(process.env.secret_key);

const chargeBalance = async () => {
  // TODO
  const charge = await stripe.charges.create({
    amount: 1099,
    currency: "usd",
    source: "tok_visa",
  });

  console.log(charge);
};

const updateChargeInfo = async () => {
  const charge = await stripe.charges.update("ch_3R0iE5GxRLjtMwcK1PfN4m77", {
    metadata: {
      shipping: "express sunfen",
    },
  });
  console.log(charge);
};

const listCharge = async () => {
  const charges = await stripe.charges.list({
    limit: 3,
  });
  console.log(charges);
};

(async () => {
  await chargeBalance();

  //   await updateChargeInfo();
  //   await listCharge();
})();
