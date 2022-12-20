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
        res.render('showData', { data });
    }catch(err){
        res.status(500).send('Registration Failed');
    }
});

module.exports = router;