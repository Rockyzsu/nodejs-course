const grpc = require('@grpc/grpc-js')
const loader = require('@grpc/proto-loader')

const pkg_def = loader.loadSync('grpc-recipe.proto')

const recipe = grpc.loadPackageDefinition(pkg_def).recipe

const host = '127.0.0.1'

const port = 7000

const server = new grpc.Server()

server.addService(recipe.RecipeService.service,{
  getMetaData:(_call,cb)=>{
    console.log('call me')
cb(null,{
  pid:process.pid
})
  },
  getRecipe:(call,cb)=>{
if(call.request.id!=42){return cb(new Error(`unknowd recipe ${call.request.id}`))}
    cb(null,{
      id:42,name:"Titoka"
    })
  }
});

server.bindAsync(`${host}:${port}`,grpc.ServerCredentials.createInsecure(),
(err,port)=>{
if(err)throw err;
  server.start();
  console.log(`producer start running at http://${host}:${port}/`)
})

