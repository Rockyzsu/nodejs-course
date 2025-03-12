require("dotenv").config();
const stripe = require("stripe")(process.env.secret_key);

const func = async () => {
// 更新订单的一些数据
const paymentIntent = await stripe.paymentIntents.update(
  'pi_3R0fzRGxRLjtMwcK01VIlIif',
  {
    metadata: {
      order_id: '6735',
    },
  }
);
console.log(paymentIntent)
};
(async () => {
  await func();
})();
