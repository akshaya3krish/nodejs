var express = require('express');
const { JsonWebTokenError } = require('jsonwebtoken');
const collection = require('../utils/mongoConnection').connection();
var router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

 

router.get('/loginPage', function(req, res, next) {
  

  res.render('loginPage',{error:null, loginStatus:false});
});

/*router.post('/loginPage', async function(req, res, next) {
    try {
        const data = await (await collection).find().toArray();
        res.render('showData', {data});
    }catch(err){
        res.status(500).send('Login Failed');
    }
});

module.exports = router;*/

router.post('/loginPage', async function(req, res, next) {
    const {email, password} = req.body;
    console.log(email,password);
    try {
        const data = await (await collection).findOne({email : email});
        const data1 = await (await collection).find().toArray();
        if (!data.email) 
        return res.status(400).send("email not found");

        if(data.password === password){
        const token = jwt.sign({user : email}, 'nodejsBatch3ExpressProject');
        console.log(token);

        res.cookie('loginPageCookie', token, {maxAge: 100000});
        console.log('Cookies:', req.cookies.loginPageCookie);

        /*try{
        const dataVerify = jwt.verify(token, 'nodejsBatch3ExpressProject');
        req.email=dataVerify.email;
        req.password=dataVerify.password;
        return next();
        }catch(err){
          console.log(err);
        }*/

        res.render('ShowData', {data:data1, loginStatus:true});
        return;
        }else {
          return res.render('loginPage',{error:'Incorrect credentials'});
        }
  } catch (err) {
    console.log(err);
    res.status(500).send("Login Failed");
  }
});
module.exports = router;