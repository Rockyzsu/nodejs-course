const proto = {
  value:'Google Chome',
get cookies(){
return this.value
},

set cookies(value){
this.value = value
}
}


console.log(proto['cookies'])
console.log(proto.cookies)

proto.cookies='FirFox'


console.log(proto['cookies'])
console.log(proto.cookies)
