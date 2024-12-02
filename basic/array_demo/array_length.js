let arr = [1, 2, 3, 4, 5];
for (let item of arr) {
  console.log(item); // display 1 2 3 4 5
}

arr.length = 4;
for (let item of arr) {
  console.log(item); // display 1 2 3 4
}

arr[6] = 88;
console.log(arr);

for (let item of arr) {
    console.log(item); // display 1 2 3 4 undefine undefine 88
  }