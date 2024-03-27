require("dotenv").config();

env = process.env;
BRANCH = env["BRANCH"];
// console.log(env);
// const host = process.env.HOST;
// console.log(branch, host);
// console.log(branch);
console.log(env[`${BRANCH}_HOST`]);
console.log(typeof env.DEBUG);
console.log(typeof true);
console.log(process.env.USE_FLAG);
if (process.env.USE_FLAG) {
  console.log("Pass");
}

console.log(typeof process.env.USE_FLAG);