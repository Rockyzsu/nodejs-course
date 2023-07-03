let first ={"name":"rokcy","age":10,'sex':"F"}
let full = {...first,"age":99}
console.log(full);

const arr = [1,2,3];
const new_arr = [...arr,5,6,7]
console.log(new_arr);

new_arr.push(1)
console.log(new_arr)


function sum(str,...num){

for(let i=0;i<num.length;i++){

  console.log(num[i]);
  console.log('====');
  console.log(i);
  console.log('end');
}
}
sum(1,[2,2,2,2,2,2],'golang');
