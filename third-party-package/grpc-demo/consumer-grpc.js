const grpc = require('@grpc/grpc-js')
const loader = require('@grpc/proto-loader')
const pkg_def = loader.loadSync('grpc-recipe.proto')
const recipe = grpc.loadPackageDefinition(pkg_def).recipe
const client = new recipe.RecipeService(
      '127.0.0.1:7000',
      grpc.credentials.createInsecure()
);
const util = require('util')
const getRecipe = util.promisify(client.getRecipe.bind(client))
//result = getRecipe({id:42})
async function getData(){
const [result1]=await Promise.all([getRecipe({id:42})])
console.log(result1);
}

getData()
