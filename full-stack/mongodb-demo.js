// require('dotenv').config()
// const db = require('./mongodb.js')
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const database = process.env.MONGODB_DATABASE;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  auth: { authSource: 'admin' },
  user: username,
  pass: password,
  dbName: database
}).then(() => console.log('Connected!'));


const noteSchema = new mongoose.Schema({
    name:String,
    age:Number,
    weight:Number
})
const doc = mongoose.model('user',noteSchema)
async function find(){
const data = await doc.find({});
console.log(data);
console.log('end')
}

find()