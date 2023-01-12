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

const adminMsgConnection = async () => {
    try{
        await client.connect();
        const collection = client.db('nodejs').collection('adminMessage');
        return Promise.resolve(collection);
    }catch(err){
        return Promise.reject(err);
    }
}
exports.connection=connection;
exports.adminMsgConnection=adminMsgConnection;

//mongodb://localhost:27017