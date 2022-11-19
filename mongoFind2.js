const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

const connectFind = () =>{
    return new Promise((resolve,reject)=>{
        try{
            client.connect();
            const collection = client.db('nodejs').collection('AssociateDetails');
            const findResult = collection.findOne({Name:'Bufu'});
            resolve (findResult);
        }catch(err){
            reject("Error in finding record");
        }
    })
}
const connectFindFunc = async()=>{
    const result = await connectFind();
    console.log(result);
}
connectFindFunc();