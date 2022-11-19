const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

const connectSkip = () =>{
    return new Promise((resolve,reject)=>{
        try{
            client.connect();
            const collection = client.db('nodejs').collection('AssociateDetails');
            const findResult = collection.find().skip(3).toArray();
            resolve (findResult);
        }catch(err){
            reject("Error in Skipping the record");
        }
    })
}
const connectSkipFunc = async()=>{
    const result = await connectSkip();
    console.log(result);
}
connectSkipFunc();