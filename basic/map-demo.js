var arr =[1,2,3,4]
var arr2=arr.map(x=>x*x)
console.log(arr)
console.log(arr2)

var arr3=arr.map(function(value,index){
if (index%2===0){
return value*2
}else{
return value*3
}
})


console.log(arr3)

const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(num => num * num);

console.log(squareNumbers); // 输出: [1, 4, 9, 16, 25]]
const numbers1 = ['2','4','7']
const new_int = numbers1.map(parseInt)
console.log(new_int)
const eight = parseInt('8')
console.log(eight)

const new_int_ = numbers1.map((n)=>parseInt(n,10))
console.log(new_int_)
