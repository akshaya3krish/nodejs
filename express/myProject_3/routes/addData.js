var express = require('express');
const collection = require('../utils/mongoConnection').connection();
var router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/openForm', function(req, res, next) {
    console.log('Cookies:', JSON.stringify(req.cookies));
    let loginStatus = false;
    if(Object.keys(req.cookies).length !==0){
        loginStatus = true;
        try{
            const dataVerify = jwt.verify(req.cookies.loginPageCookie, 'nodejsBatch3ExpressProject');
            console.log("Verified Token:", dataVerify);
            res.render('showForm', {loginStatus});
        }catch(err){
            console.log(err);
            return res.redirect('/loginPage');
        }
    }else{
        res.redirect('/loginPage');
    }
});
router.post('/addNewData', async function(req, res, next) {
    const postedData = req.body;
    try {
        console.log('Cookies:', JSON.stringify(req.cookies));
        let loginStatus = false;
        if(Object.keys(req.cookies).length !==0){
            loginStatus = true;
            try{
                const dataVerify = jwt.verify(req.cookies.loginPageCookie, 'nodejsBatch3ExpressProject');
                console.log("Verified Token:", dataVerify);
                const insertResult = await (await collection).insertOne(postedData);
                const data = await (await collection).find().toArray();
                res.render('showData', { data, loginStatus:true });
            }catch(err){
                console.log(err);
                return res.redirect('/loginPage');
            }
        }else{
            res.redirect('/loginPage');
        }
   
    }catch(err){
        res.status(500).send('Some Error in Insertion.');
    }
});
module.exports = router;


/*router.get('/openForm', function(req, res, next) {
    console.log('Cookies:', req.cookies);
    let loginStatus = false;
    if(req.cookies != null || req.cookies != undefined){
        loginStatus = true;
        res.render('showData', {loginStatus : loginStatus});
    }else{
        res.redirect('/loginPage');
    }
});*/

/*router.post('/addNewData', async function(req, res, next) {
    const postedData = req.body;
    try {
        const insertResult = await (await collection).insertOne(postedData);
        const data = await (await collection).find().toArray();
        res.render('showData', { data, loginStatus:true });
    }catch(err){
        res.status(500).send('Some Error in Insertion.');
    }
});*/

/*router.post('/addNewData', async function(req, res, next) {
    const postedData = req.body;
    try {
        let loginStatus = false;
        if(req.cookies != null || req.cookies != undefined){
            loginStatus = true;
            res.render('showData', {loginStatus});
        }else{
            res.redirect('/loginPage');
        }
        const insertResult = await (await collection).insertOne(postedData);
        const data = await (await collection).find().toArray();
        res.render('showData', { data, loginStatus:true });
    }catch(err){
        res.status(500).send('Some Error in Insertion.');
    }
});*/