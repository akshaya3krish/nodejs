const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

const connection = async () => {
    try{
        await client.connect();
        const collection = client.db('nodejs').collection('AssociateDetails');
        return Promise.resolve(collection);
    }catch(err){
        return Promise.reject(err);
    }
}
exports.connection=connection;