var express = require('express');
const collection = require('../utils/mongoConnection').connection();
var router = express.Router();

router.get('/getData', async function(req, res, next) {
    const data = await (await collection).find().toArray();
    res.render('showData', { data });
});

router.get('/getSpecificData', async function(req, res, next) {
    const queryData = req.query;
    const data = await (await collection).find({Name:queryData.Name, college:queryData.college}).toArray();
    res.render('showData', { data });
});

router.get('/getDataByParam/:param', async function(req, res, next) {
    const paramData = req.params;
    const data = await (await collection).find({college:paramData.param,Name:paramData.Name}).toArray();
    res.render('showData', { data });
});

module.exports = router;