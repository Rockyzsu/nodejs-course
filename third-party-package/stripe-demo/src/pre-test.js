require('dotenv').config();
const stripe = require('stripe')(process.env.secret_key);


const preTest = async () => {
  var charge = await stripe.charges.retrieve("ch_3LiiC52eZvKYlo2C1da66ZSQ", {
    apiKey: "",
  });

  console.log(charge);
};

(async () => {
  await preTest();
})();
