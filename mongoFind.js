const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

const connectFind = async () => {
    try {
        await client.connect();
        const collection = client.db('nodejs').collection('AssociateDetails');
        const findResult = await collection.findOne({Name:'Bufu'});
        return Promise.resolve({findResult});
    }catch(err){
        return Promise.reject(err);
    }
};

connectFind().then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(`Some Error ${error}`);
});