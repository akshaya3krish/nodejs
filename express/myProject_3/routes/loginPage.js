var express = require('express');
const collection = require('../utils/mongoConnection').connection();
var router = express.Router();

router.get('/loginPage', function(req, res, next) {
  res.render('loginPage',{error:null});
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
          res.render('afterLoginShowData', {data:data1});
          return;
        }else {
          return res.render('loginPage',{error:'Incorect credentials'});
        }
  } catch (err) {
    console.log(err);
    res.status(500).send("Login Failed");
  }
});
module.exports = router;