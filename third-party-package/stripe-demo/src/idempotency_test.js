require('dotenv').config();
const stripe = require('stripe')(process.env.secret_key);


 // use an idempotency key. 保证不是重复的操作
 // All POST requests accept idempotency keys. Don’t send idempotency keys in GET and DELETE requests 
 // because it has no effect. These requests are idempotent by definition.

 // 代码里面可以加入 idempotency key

const preTest = async () => {
  const customer = await stripe.customers.create(
    {
        name: "Jenny Rosen",
      description: "Your First Test Customer (created for API docs at https://docs.stripe.com/api)",
    },
    // {
    // //   idempotencyKey: "1KG5LxwFBepaKHyUD9",
    // }
  );
  console.log(customer);
};


(async () => {
  await preTest();
})();


// 创建之后每次重复创建，都是一样的