const arr = [1, 2, [3, 4], [2, 3, 4, [0, 0, 0]]];
const flattened = arr.flat(); // defualt flat 1 cover,

console.log(flattened);
// 输出: [1, 2, 3, 4]

const arr2 = [1, [2, [3, [4, [5]]]]];
const flattened2 = arr2.flat(Infinity);

console.log(flattened2);
// 输出: [1, 2, 3, 4, 5]
const package_product_link = "[[1, 10]]";
const is_bundled = JSON.parse(package_product_link).flat(2);
console.log(is_bundled);
