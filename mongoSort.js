const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

const connectSort = () =>{
    return new Promise((resolve,reject)=>{
        try{
            client.connect();
            const collection = client.db('nodejs').collection('AssociateDetails');
            const findResult = collection.find().sort({Age : 1}).toArray();
            resolve (findResult);
        }catch(err){
            reject("Error in Sort");
        }
    })
}
const connectSortFunc = async()=>{
    const result = await connectSort();
    console.log(result);
}
connectSortFunc();