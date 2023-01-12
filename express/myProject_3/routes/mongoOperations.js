var express = require('express');
const collection = require('../utils/mongoConnection').connection();
const collection2 = require('../utils/mongoConnection').adminMsgConnection();
var router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/getData', async function(req, res, next) {
    
    //console.log(Object.keys(req.cookies).length);
    console.log('Cookies:', JSON.stringify(req.cookies));
    let loginStatus = false;
    if(Object.keys(req.cookies).length !==0){
        loginStatus = true;
        try{
            const dataVerify = jwt.verify(req.cookies.loginPageCookie, 'nodejsBatch3ExpressProject');
            console.log("Verified Token:", dataVerify);
            const data = await (await collection).find().toArray();
            const adminMsgData = await (await collection2).find().toArray();
            console.log(adminMsgData);
            res.render('showData', { data, loginStatus, adminMsgData:adminMsgData[1]});
        }catch(err){
              console.log(err);
              return res.redirect('/loginPage');
        }
    }else{
        res.redirect('/loginPage');
    }
   // res.render('showData', { data, loginStatus });
});
module.exports = router;



/*router.get('/getData', async function(req, res, next) {
    const data = await (await collection).find().toArray();
    console.log('Cookies:', req.cookies);
    let loginStatus = false;
    if(req.cookies !== null || req.cookies !== undefined){
        loginStatus = true;
    }
    res.render('showData', { data, loginStatus });
});*/
/*router.get('/getSpecificData', async function(req, res, next) {
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
});*/