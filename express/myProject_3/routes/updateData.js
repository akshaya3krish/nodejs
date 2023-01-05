var express = require('express');
const collection = require('../utils/mongoConnection').connection();
var router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/getDataToBeUpdated', async function(req, res, next) {
    let loginStatus = false;
    if(Object.keys(req.cookies).length !==0){
        loginStatus = true;
        try{
            const dataVerify = jwt.verify(req.cookies.loginPageCookie, 'nodejsBatch3ExpressProject');
            console.log("Verified Token:", dataVerify);
            const name = req.query.update;
            const data = await (await collection).findOne({Name:name});
            res.render('showUpdateForm',{dataTobeUpdated:data, loginStatus});
        }catch(err){
                console.log(err);
                return res.redirect('/loginPage');
        }
    }else{
    res.redirect('/loginPage');
    }  
    });

router.post('/updateNewData', async function(req, res, next) {
    const postedData = req.body;
    console.log(postedData);
    console.log(postedData.college);
    try {
        let loginStatus = false;
        if(Object.keys(req.cookies).length !==0){
        loginStatus = true;
        try{
            const dataVerify = jwt.verify(req.cookies.loginPageCookie, 'nodejsBatch3ExpressProject');
            console.log("Verified Token:", dataVerify);
            const updateResult = await (await collection).updateOne({Name:postedData.Name}, 
            {$set:{Age:postedData.Age,Address:postedData.Address,PhoneNo:postedData.PhoneNo,college:postedData.college }});
            const data = await (await collection).find().toArray();
            res.render('showData', { data, loginStatus:true });
        }catch(err){
            console.log(err);
            return res.redirect('/loginPage');
        }
        }
    }catch(err){
        console.error(err);
        res.status(500).send('Some Error in Updation.');
    }
});

module.exports = router;


/*router.get('/getDataToBeUpdated', async function(req, res, next) {
    const name = req.query.update;
    const data = await (await collection).findOne({Name:name});
    console.log('Cookies:', req.cookies);
    let loginStatus = false;
    if(req.cookies !== null || req.cookies !== undefined){
        loginStatus = true;
    }
    res.render('showUpdateForm',{dataTobeUpdated:data, loginStatus});
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
        res.render('showData', { data, loginStatus:true });
    }catch(err){
        console.error(err);
        res.status(500).send('Some Error in Updation.');
    }
});*/