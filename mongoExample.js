const {MongoClient} = require('mongodb'); // imported the mongoClient
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

const connection = async () => {
    try{
        await client.connect();// waiting untill connection in established.
        const collection = client.db('nodejs').collection('AssociateDetails');
        await collection.insertOne({Name : "Wolfoo",Age : 27,DOB : "January 27",Address : "No-3, FOO",PhoneNo : 9658412370,EmailId : "wolfoo@gmail.com",college : "WCC"});
        return Promise.resolve('Insertion Successful');
    }catch(err){
        return Promise.reject(err);
    }
}
connection().then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(`Connection Failure: ${error}`);
});