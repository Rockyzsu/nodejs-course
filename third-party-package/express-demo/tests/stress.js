const axios = require("axios");
const timeout = 20000; // 2000毫秒
async function stress() {
  const resp = await axios.get("http://localhost:7000/",{timeout});
  // console.log(resp.data);
  console.log(resp.data);
  return resp.data;
}

async function main() {
  const task_list = [];
  for (let i = 0; i < 500; i++) {
    const resp = stress();
    // console.log(resp)
    task_list.push(resp);
  }

  const result = await Promise.all(task_list);
  console.log(result.length);
  // stress()
}
main();
