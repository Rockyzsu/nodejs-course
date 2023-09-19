const cache = [
  {id:1,size:1},
  {id:2,size:2},
  {id:3,size:3},
  {id:4,size:4},
  {id:5,size:5},
  {id:6,size:6},
  {id:7,size:7},
  {id:8,size:8},
  {id:9,size:9},
  {id:10,size:10},
  {id:11,size:11},
]

const hit_cache = cache.filter(function(x){
if(x.id>6){return true}
})

console.log(hit_cache)
