const server = require('fastify')();
const grpc = require('@grpc/grpc-js')
const loader = require('@grpc/proto-loader')
const pkg_def = loader.loadSync('grpc-recipe.proto')
const recipe = grpc.loadPackageDefinition(pkg_def).recipe
const client = new recipe.RecipeService(
      '127.0.0.1:7001',
      grpc.credentials.createInsecure()
);
const util = require('util')
const getRecipe = util.promisify(client.getRecipe.bind(client))
const getMetaData = util.promisify(client.getMetaData.bind(client))
//result = getRecipe({id:42})
async function getRecipeData(){
const [result1]=await Promise.all([getRecipe({id:42})])
console.log(result1);
}

async function getMetaDataFunc(){
const [result1]=await Promise.all([getMetaData({})])
console.log(result1);
return result1
}
server.get('/getRecipe',async()=>{
  console.log('call me baby worker pid ',process.pid)
  const data = await getRecipe({id:42})
return data
})

server.get('/getMeta',async()=>{
  console.log('call me baby worker pid ',process.pid)
  const data = await getMetaDataFunc()
  return data
})

server.get('/health',async()=>{
  console.log('call me baby worker pid ',process.pid)
  return "OK"
})

const host = '0.0.0.0'
const port = 7000
server.listen(port,host,()=>{
console.log(`consumer is listening port ${port}`)
})
