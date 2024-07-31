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


let array = [[7], [9], [11], [13]];
let flattenedArray = array.flat();
console.log("Example 2 ")
console.log(flattenedArray);

let package_country_product_link = [[1, [2],[3]],[2,[1]]]
let result = package_country_product_link.map((item1) =>
                              item1.slice(1) // TODO 如果没有传入country id，这些需要改动
                            ).flat(2)

console.log("Example 3 ")
console.log(result);

