let person = {
  name:'rocky',
  age:18
}


const {name} = person;
//const {name,age} = person;
console.log(name)
//console.log(age)
//
//
let position = {
"pos":{
  "lat":109,
  "lng":23
},
  "tempeture":23
}

const {pos:{lat,lng}}=position

console.log(lat)
console.log(lng)
//console.log(pos) // pos not define
