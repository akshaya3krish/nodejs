var express = require('express');
var router = express.Router();
const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const sql = require('mssql');
const connObj = require('../utils/sqlConnection');
require('dotenv').config();


router.get('/loginPage', function(req, res, next) {
  res.render('loginPage',{error:null, loginStatus:false});
});

router.post('/loginPage', async function(req, res, next) {
    const {email, password} = req.body;
    console.log(email,password);
    try {
      connObj.connection().then(async (pool)=> {
        const tablename = 'Employees';
        const findEmail = await pool.request()
        .input('email', sql.VarChar, email)
        .input('password', sql.VarChar, password)
        .query(`select * from Employees where email=@email and password=@password`);
        
        console.log(findEmail);
        const loginResult = await pool.request().query(`select * from ${tablename}`);

        if (!findEmail.recordset[0].email)
        return res.status(400).send("email not found");

        if(findEmail.recordset[0].password === password){
        const token = jwt.sign({user : email}, 'express-sqlProject');
        console.log(token);

        res.cookie('sqlCookie', token, {maxAge: 1000000});
        console.log('Cookies:', req.cookies.sqlCookie);

        
        res.render('showData', {data:loginResult.recordset, loginStatus:true});
        
        }else {
          return res.render('loginPage', {error:'Incorrect credentials'});
        }
       
  });  
}catch(err){
  console.log(err);
  res.status(500).send("Login Failed");
}
});
module.exports = router;