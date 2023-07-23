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
