var express = require('express');
const collection = require('../utils/mongoConnection').adminMsgConnection();
var router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/welcomeAdmin', function(req, res, next) {
    let loginStatus = false;
    if(Object.keys(req.cookies).length !==0){
        loginStatus = true;
        try{
            const dataVerify = jwt.verify(req.cookies.loginPageCookie, 'nodejsBatch3ExpressProject');
            console.log("Verified Token:", dataVerify);
            res.render('welcomeAdmin', {loginStatus:true});
        }catch(err){
            console.log(err);
            return res.redirect('/loginPage');
        }
    }else{
        res.redirect('/loginPage');
    }  
  });


router.post('/adminMessage', async function(req, res, next) {
      const postedData = req.body;
      try {
              const adminMsgResult = await (await collection).insertOne(postedData);
              res.redirect('/welcomeAdmin', );
      }catch(err){
          res.status(500).send('Retry...Message Posted Failed');
      }
  });
  
  module.exports = router;