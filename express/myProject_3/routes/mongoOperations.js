var express = require('express');
const collection = require('../utils/mongoConnection').connection();
var router = express.Router();

router.get('/getData', async function(req, res, next) {
    const data = await (await collection).find().toArray();
    res.render('showData', { data });
});

router.get('/getSpecificData', async function(req, res, next) {
    const queryData = req.query;
    const data = await (await collection).find({college:queryData.college}).toArray();
    res.render('showData', { data });
});

router.get('/getDataByParam/:param', async function(req, res, next) {
    const paramData = req.params;
    const data = await (await collection).find({college:paramData.param}).toArray();
    res.render('showData', { data });
});

router.post('/addData', async function(req, res, next) {
    const postedData = req.body;
        const insertResult = await (await collection).insertOne(postedData);
        const data = await (await collection).find().toArray();
        res.render('showData', { data });
});

router.put('/updateData', async function(req, res, next) {
    const updateData = req.body;
        const updateResult = await (await collection).updateOne({Name:updateData.Name}, {$set:{college:updateData.college}});
        const data = await (await collection).find().toArray();
        res.render('showData', { data });
});

module.exports = router;