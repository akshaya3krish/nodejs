const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

const connectUpdate = () =>{
    return new Promise((resolve,reject)=>{
        try{
            client.connect();
            const collection = client.db('nodejs').collection('AssociateDetails');
            collection.updateOne({Name : "Pando"},{$set:{college : "SRM"}}, { multi: false, upsert: false});
            collection.updateMany({Name : "Pando"},{$set:{college : "SRM"}}, { multi: false, upsert: false});
            resolve("Updated successfuly");
        }catch(err){
            reject("Error in Updating record");
        }
    })
}
const connectUpdateFunc = async()=>{
    const result = await connectUpdate();
    console.log(`Updation completed: ${result}`);
}
connectUpdateFunc();