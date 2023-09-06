require('dotenv').config();

env = process.env;
BRANCH = env['BRANCH'];
// console.log(env);
// const host = process.env.HOST;
// console.log(branch, host);
// console.log(branch);
console.log(env[`${BRANCH}_HOST`]);