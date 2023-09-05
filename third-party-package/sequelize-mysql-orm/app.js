var WishModel = require('./wish')
task={
  query:async ()=>{
    WishModel
  .findAll({limit:10})
  .then(function(result){
  let list=[]
  result.forEach((v,i)=>{
  let obj = {id:v.id,
  name:v.name,
  content:v.content
  }
  list.push(obj)

  })
console.log(list)
})
  .catch(function(err){
console.log(err)
})},
create:async ()=>{
  for(let i =0;i<10;i++){
  WishModel.create({name:`name ${i}`,content:`content: ${i}`})
    .then((result)=>{
      console.log(result);
    })
    .catch((err)=>{
    console.log(err);
    }
    )
  }
}
}
task.query()

