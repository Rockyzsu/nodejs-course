const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
// const uri = process.env.MONGODB_URI_AUTH;
const uri = process.env.MONGODB_URI;
console.log(uri);   
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(err){
    console.error(err);
  }finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    
  }
}
async function queryData(){
  try {
    await client.connect();
    const database = client.db("db_");
    // const collections = await database.listCollections().toArray();
    // console.log(collections);
    const collection = database.collection("topics");
    console.log(await collection.find().toArray());

  } finally {
    await client.close();
  }
}

// run().catch(console.dir);
queryData().catch(console.dir);