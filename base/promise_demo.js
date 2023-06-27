let p = new Promise((resolve,reject)=>{
	setTimeout(
		()=>{
		let a="pass";
		if(a=="pass"){
			resolve("Pass");
		}else{
		reject("Failed")
	}
},1000)
}
).then(res=>{
console.log(res);
  console.log('console in Pass');
},error=>{
console.log(error)
  console.log('error in console');
})

console.log('start func 2 ')
const myDelay1 = (sec)=>{
return new Promise((resolve,reject)=>{
if (typeof sec!='number'){
reject(new Error("arg must be number"))
}else{
console.log('it was number!!!')
setTimeout(()=>{resolve(sec)},2000)
}
})
}

myDelay1(1000).then((result)=>{
console.log('in then')
  console.log(result)
  return myDelay1(2000)
}).then((res)=>{
console.log(res);
  console.log('next then');
}).catch((err)=>{
console.log('catch err')
  console.log(err)
})
