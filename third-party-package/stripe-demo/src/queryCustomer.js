require("dotenv").config();
const stripe = require("stripe")(process.env.secret_key);

const query = async () => {
  let count = 0;
  for await (const customer of stripe.customers.list({ limit: 3 })) {
    // Do something with customer

    console.log("===================", count);
    console.log("+", customer.name, "+", customer.description);
    console.log("===================");
    count += 1;
  }
};
// In Node 10+:
(async () => {
  await query();
})();
