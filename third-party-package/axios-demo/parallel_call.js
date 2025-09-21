const axios = require("axios");
const FormData = require("form-data");

async function updateBonus(amount) {
  let data = new FormData();
  data.append("uid", "10043");
  data.append("amount", amount);
  data.append("wallet_id", "1");
  data.append("bonus_type", "2");
  data.append("cid", "10010");
  data.append("remarks", "hello world isa");
  data.append("order_number", "RV-2097");

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https:/isa2u-memberapi.demo4mlm.com/api/wallet/updatebonus",
    headers: {
      cookie: "token=d41fcd2347117ba15906e8e807740bab",
      ...data.getHeaders(),
    },
    data: data,
  };

  await axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}

let amount_arr = [10, 10, 10, 10, 10];
let tasks = amount_arr.map((x) => updateBonus(x));
async function main() {
  let result = await Promise.all(tasks);
  console.log(result);
}
// let result = await Promise.all(tasks)

main();
