const array = [5, 2, 1, 4, 3];

// 升序排序
const ascendingOrder = array.sort((a, b) => a - b);
console.log(ascendingOrder); // 输出: [1, 2, 3, 4, 5]
//
// 降序排序
const descendingOrder = array.sort((a, b) => b - a);
console.log(descendingOrder); // 输出: [5, 4, 3, 2, 1]

console.log('orign array is ', array)
