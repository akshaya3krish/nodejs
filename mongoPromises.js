const {MongoClient} = require('mongodb'); // imported the mongoClient
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

const connection = () =>{
    return new Promise((resolve)=>{
            client.connect();// waiting untill connection in established.
            const collection = client.db('nodejs').collection('AssociateDetails');
            collection.insertOne({Name : "Pando",Age : 17,DOB : "May 20",Address : "No-3, PAN",PhoneNo : 9852630147,EmailId : "pando@gmail.com",college : "Stella"});
            resolve("Insertion successful");
    })
}
connection().then((result)=>{
    console.log(`Result: ${result}`);
}).catch((error)=>{
    console.error(`Error: ${error}`);
})