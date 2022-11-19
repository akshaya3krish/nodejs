const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

const connectCount = () =>{
    return new Promise((resolve,reject)=>{
        try{
            client.connect();
            const collection = client.db('nodejs').collection('AssociateDetails');
            const findResult = collection.count({college : "Ethiraj"});
            resolve (findResult);
        }catch(err){
            reject("Error in Counting the record");
        }
    })
}
const connectCountFunc = async()=>{
    const result = await connectCount();
    console.log(result);
}
connectCountFunc();