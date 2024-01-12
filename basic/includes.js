const array = [1, 2, 3, 4, 5,6];
const number = '6';

if (!array.includes(number)) {
    console.log(`${number} 不存在于数组中`);
} else {
    console.log(`${number} 存在于数组中`);
}