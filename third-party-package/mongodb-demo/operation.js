const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const uri = process.env.MONGODB_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function queryData() {
  try {
    await client.connect();
    const database = client.db("db_parker");
    // const collections = await database.listCollections().toArray();
    // console.log(collections);
    const collection = database.collection("users_test");
    console.log(await collection.find().toArray());
  } finally {
    await client.close();
  }
}

async function insert_data(collection, params) {
  try {
    await client.connect();
    const database = client.db("db_parker");
    const collection = database.collection("users_test");
    const result = await collection.insertOne(params);
    console.log(result);
  } finally {
    await client.close();
  }
}

async function insert_many_data() {
  try {
    await client.connect();
    const database = client.db("db_parker");
    const collection = database.collection("users_test");
    const data = [
      { name: "DDD FFF", updated: new Date() },
      { name: "LLL EEE", updated: new Date() },
    ];
    const result = await collection.insertMany(data);
    console.log(result);
  } finally {
    await client.close();
  }
}

(async function main() {
  // await queryData();
  //   await insert_data("users_test", { name: "This is John", updated: new Date() });
//   await insert_many_data();
  await queryData();
})();
