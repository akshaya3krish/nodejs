var express = require('express');
const sql = require('mssql');
const connObj = require('../utils/sqlConnection');
var router = express.Router();
const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');

router.get('/showSearchPage', function(req, res, next) {
  let loginStatus = false;
  if(Object.keys(req.cookies).length !==0){
  loginStatus = true;
    connObj.connection().then(async (pool)=> {

      const tokenVerify = jwt.verify(req.cookies.sqlCookie, 'express-sqlProject');
      console.log("Verified Token:", tokenVerify);
        res.render('searchPage', {loginStatus});
    }).catch((err)=> {
        console.log(err);
    });
  }else{
    res.redirect('/loginPage');
  }
});

router.post('/showSearchPage', async function(req, res, next) {
  const {City} = req.body;
  console.log(City);
    try{
        connObj.connection().then(async (pool)=> {
        const dropDownResult = await pool.request()
        .input('City', sql.VarChar, City)
        .query(`select * from Employees where City = @City`);
        console.log(dropDownResult.recordset[0].City);
        console.log(dropDownResult);
        if(dropDownResult.recordset !== null && dropDownResult.recordset !== undefined)
        {
        res.render('searchResult', {data:dropDownResult.recordset});
        }else{
          res.send("Please check");
        }
    });
    }catch(err) {
        res.status(500).send('Error in Search Result');
    }

});

module.exports = router;

/*router.get('/showSearchPage', function(req, res, next) {
  let loginStatus = false;
  if(Object.keys(req.cookies).length !==0){
  loginStatus = true;
    connObj.connection().then(async (pool)=> {

      const tokenVerify = jwt.verify(req.cookies.sqlCookie, 'express-sqlProject');
      console.log("Verified Token:", tokenVerify);
        res.render('searchPage', {loginStatus});
    }).catch((err)=> {
        console.log(err);
    });
  }else{
    res.redirect('/loginPage');
  }
});

router.post('/searchPage', async function(req, res, next) {
    try{
      let loginStatus = false;
      if(Object.keys(req.cookies).length !==0){
      loginStatus = true;
        connObj.connection().then(async (pool)=> {

        const tokenVerify = jwt.verify(req.cookies.sqlCookie, 'express-sqlProject');
        console.log("Verified Token:", tokenVerify);

        const dropDownResult = await pool.request()
        .query(`select City from Employees`);
        console.log(dropDownResult);
        res.render('searchPage', {dropdownvals:dropDownResult, loginStatus:true });
    });
    }else{
      res.redirect('/loginPage');
    }
    }catch(err) {
        res.status(500).send('Error in Search Result');
    }

});

module.exports = router;*/