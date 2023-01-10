var express = require('express');
const collection = require('../utils/mongoConnection').connection();
var router = express.Router();

router.get('/registrationForm', function(req, res, next) {
  res.render('registrationForm');
});

router.post('/registrationForm', async function(req, res, next) {
    const postedData = req.body;
    try {
            const insertResult = await (await collection).insertOne(postedData);
            const data = await (await collection).find().toArray();
            res.render('welcomePage', {data});
    }catch(err){
        res.status(500).send('Registration Failed');
    }
});

module.exports = router;

/*router.post('/registrationForm', async function(req, res, next) {
    const postedData = req.body;
    try {
        const insertResult = await (await collection).insertOne(postedData);
        const data = await (await collection).find().toArray();
        res.render('showData', { data : insertResult });
    }catch(err){
        res.status(500).send('Registration Failed');
    }
});*/

/*router.post('/registrationForm', async function(req, res, next) {
    const postedData = req.body;
    try {
        if(req.body.registerType == 'user'){
            const insertResult = await (await collection).insertOne(postedData);
            const data = await (await collection).find().toArray();
            res.render('welcomePage', {data});
        }else if(req.body.registerType == 'admin'){
            const insertResult = await (await collection).insertOne(postedData);
            const data = await (await collection).find().toArray();
            res.render('welcomePage', {data});
        }else {
            return res.render('registrationForm');
        }
    }catch(err){
        res.status(500).send('Registration Failed');
    }
});*/


/*router.post('/registrationForm', async function(req, res, next) {
    const postedData = req.body;
    try {
        if(req.body.registerType == 'user' || req.body.registerType == 'admin'){
            const insertResult = await (await collection).insertOne(postedData);
            const data = await (await collection).find().toArray();
            res.render('welcomePage', {data});
        }else {
            return res.render('registrationForm');
        }
    }catch(err){
        res.status(500).send('Registration Failed');
    }
});*/