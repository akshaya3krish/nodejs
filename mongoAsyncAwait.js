const {MongoClient} = require('mongodb'); // imported the mongoClient
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

const connection = () =>{
    return new Promise((resolve,reject)=>{
        try{
            client.connect();// waiting untill connection in established.
            const collection = client.db('nodejs').collection('AssociateDetails');
            collection.insertOne({Name : "Bufu",Age : 28,DOB : "August 10",Address : "No-10, BUF",PhoneNo : 9012536478,EmailId : "bufu@gmail.com",college : "Ethiraj"});
            resolve("Insertion successful");
        }catch(err){
            reject("Error in Inserting record");
        }
    })
}
const connectionFunc = async()=>{
    const result = await connection();
    console.log(`Connection Successful: ${result}`);
}
connectionFunc();