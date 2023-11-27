function getName(...args) {
  console.log(args); // args 是 [1,2,3] array 类型
}

const a = 1;
const b = 2;
const c = 3;
getName(a, b, c);

function getAge(){
const dict = {color:'red',padding:'10px'}
 const new_dict =  {...dict,'price':10};
  console.log(new_dict)
}

getAge()
