const { isAnyEmpty } = require("./checkParms");
const [a, b, c] = [1, 2, undefined];
console.log(isAnyEmpty(a, b, c));
