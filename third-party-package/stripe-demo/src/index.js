
require('dotenv').config();
const stripe = require('stripe')(process.env.secret_key);



// 创建产品
stripe.products.create({
  name: 'Rocky - Starter Subscription',
  description: 'Rocky - $12/Month subscription',
}).then(product => {
  stripe.prices.create({
    unit_amount: 1300,
    currency: 'usd',
    recurring: {
      interval: 'month',
    },
    product: product.id,
  }).then(price => {
    console.log('Success! Here is your starter subscription product id: ' + product.id);
    console.log('Success! Here is your starter subscription price id: ' + price.id);
  });
});