const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

const connectDelete = () =>{
    return new Promise((resolve,reject)=>{
        try{
            client.connect();
            const collection = client.db('nodejs').collection('AssociateDetails');
            collection.deleteOne({Name : "Pando"});
            resolve("Deletion successful");
        }catch(err){
            reject("Error in Deleting record");
        }
    })
}
const connectDeleteFunc = async()=>{
    const result = await connectDelete();
    console.log(`Deletion completed: ${result}`);
}
connectDeleteFunc();