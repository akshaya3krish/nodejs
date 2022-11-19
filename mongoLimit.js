const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

const connectLimit = () =>{
    return new Promise((resolve,reject)=>{
        try{
            client.connect();
            const collection = client.db('nodejs').collection('AssociateDetails');
            const findResult = collection.find().limit(5).toArray();
            resolve (findResult);
        }catch(err){
            reject("Error in limit");
        }
    })
}
const connectLimitFunc = async()=>{
    const result = await connectLimit();
    console.log(result);
}
connectLimitFunc();