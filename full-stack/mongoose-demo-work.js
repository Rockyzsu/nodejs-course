// 7.4.2
require('dotenv').config()


const MONGODB_URI = process.env.MONGODB_URI_AUTH;


mongoose = require('mongoose')
mongoose.connect(MONGODB_URI)

function callback(err) {
    console.log('Error');
    console.log(err);
}
mongoose.connection.on('error', callback);
console.log('connected');
const UserModel = mongoose.model('newDoc', new mongoose.Schema({ name: String }, {
    versionKey: false, // You should be aware of the outcome after set to false
}),'newDoc');

const firstNames = ['John', 'Jane', 'David', 'Emily', 'Michael'];
const lastNames = ['Smith', 'Johnson', 'Brown', 'Davis', 'Miller'];


async function createData() {
    for (let i = 0; i < 100; i++) {
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

        const randomFullName = randomFirstName + ' ' + randomLastName;


        // You can use a Model to create new documents using `new`:
        const userDoc = new UserModel({ name: randomFullName });
        await userDoc.save();
    }
}

async function queryData(){
    const userFromDb = await UserModel.find();
    for(let i of userFromDb){
        console.log(i.name)
    }
    await mongoose.connection.close();
}


let start = Date.now();
//work
// createData()
queryData()

let end = Date.now();
console.log(end - start);
// mongoose.connection.close()
// db.disconnect()