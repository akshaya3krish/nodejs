var express = require('express');
var router = express.Router();
const collection = require('../utils/mongoConnection').connection();
const jwt = require('jsonwebtoken');


router.get('/deleteData', async function(req, res, next) {
    const name = req.query.Name;
        let loginStatus = false;
        if(Object.keys(req.cookies).length !==0){
        loginStatus = true;
        try{
        const dataVerify = jwt.verify(req.cookies.loginPageCookie, 'nodejsBatch3ExpressProject');
        console.log("Verified Token:", dataVerify);
        const deleteResult = await (await collection).deleteOne({Name:name});
        const data = await (await collection).find().toArray();
        res.render('showData', { data, loginStatus });
        }catch(err){
        console.log(err);
        return res.redirect('/loginPage');
        }
        }else{
            res.redirect('/loginPage');
        }
});

module.exports = router;

/*router.get('/deleteData', async function(req, res, next) {
    const name = req.query.Name;
    try{
        const deleteResult = await (await collection).deleteOne({Name:name});
        const data = await (await collection).find().toArray();
        console.log('Cookies:', req.cookies);
        let loginStatus = false;
        if(req.cookies !== null || req.cookies !== undefined)
        {
            loginStatus = true;
        }
        res.render('showData', { data, loginStatus });
    }catch(err){
        console.error(err);
        res.status(500).send('Some Error in Delete operation');
    }
});*/