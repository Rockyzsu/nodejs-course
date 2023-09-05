console.time('s1')
let sum=0
for(let i =0;i<10000;i++){

for(let j =1;j<10;j++){
sum=sum+i+j
}
}
console.timeEnd('s1')
