const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

const connection = async () => {
    try {
        await client.connect();
        const collection = client.db('nodejs').collection('AssociateDetails');
        const findResultInitial = await collection.findOne({Name: "Catty"});
        if (findResultInitial === null || findResultInitial === undefined) {
            await collection.insertOne({Name:'Catty', city : 'Chennai', course:'Nodejs' });
        }
        return Promise.resolve(findResultInitial);
    }catch(err){
        return Promise.reject(err);
    }
};
connection().then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(`Some Error ${error}`);
});