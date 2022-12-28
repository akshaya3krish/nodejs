var express = require('express');
const collection = require('../utils/mongoConnection').connection();
var router = express.Router();

router.get('/openForm', function(req, res, next) {
    console.log('Cookies: ', req.cookies);
    let loginStatus = false;
    if(req.cookies !== null || req.cookies !== undefined){
        loginStatus = true;
    }
  res.render('showForm', {loginStatus});
});

router.post('/addNewData', async function(req, res, next) {
    const postedData = req.body;
    try {
        const insertResult = await (await collection).insertOne(postedData);
        const data = await (await collection).find().toArray();
        res.render('showData', { data, loginStatus:true });
    }catch(err){
        res.status(500).send('Some Error in Insertion.');
    }
});

module.exports = router;