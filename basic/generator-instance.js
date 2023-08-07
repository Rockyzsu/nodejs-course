let generator;

let getDataOne=()=>{
setTimeout(()=>{
generator.next("One ")},
3000
)
}

let getDataTwo=()=>{
setTimeout(()=>{
generator.next("Two ")},
3000
)
}

function *main(){
dataOne = yield getDataOne()
console.log("first")
  dataTwo= yield getDataTwo()
console.log(dataOne)
console.log(dataTwo)
}


generator = main()
generator.next()
console.log("end") // it will show first
