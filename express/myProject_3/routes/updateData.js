var express = require('express');
const collection = require('../utils/mongoConnection').connection();
var router = express.Router();

router.get('/getDataToBeUpdated', async function(req, res, next) {
    const name = req.query.update;
    const data = await (await collection).findOne({Name:name});
    res.render('showUpdateForm',{dataTobeUpdated:data});
   // res.render('showUpdateForm');
});

router.post('/updateNewData', async function(req, res, next) {
    const postedData = req.body;
    console.log(postedData);
    console.log(postedData.college);
    try {
        const updateResult = await (await collection).updateOne({Name:postedData.Name}, 
            {$set:{Age:postedData.Age,Address:postedData.Address,PhoneNo:postedData.PhoneNo,college:postedData.college }});
        const data = await (await collection).find().toArray();
        res.render('showData', { data });
    }catch(err){
        console.error(err);
        res.status(500).send('Some Error in Updation.');
    }
});

module.exports = router;