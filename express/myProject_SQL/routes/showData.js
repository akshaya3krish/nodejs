var express = require('express');
const sql = require('mssql');
const connObj = require('../utils/sqlConnection');
var router = express.Router();
const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');


router.get('/showData',async  function(req, res, next) {
    let loginStatus = false;
    if(Object.keys(req.cookies).length !==0){
    loginStatus = true;
    connObj.connection().then(async (pool)=> {
    const tokenVerify = jwt.verify(req.cookies.sqlCookie, 'express-sqlProject');
    console.log("Verified Token:", tokenVerify);
      const tablename = 'Employees';
      const tableResult = await pool.request().query(`select * from ${tablename}`);
      console.dir(tableResult)
      res.render('showData', {data:tableResult.recordset, loginStatus});
    }).catch((err)=> {
      console.log(err);
    });
    }else{
        res.redirect('/loginPage');
    }
    });
    

module.exports = router;

/*router.get('/showData', async function(req, res, next) {
    try{
        sql.connect(pool).then(() => {
            sql.query `select * from Employee`;
            
            res.render('showData', {data:pool});
        }).then(result => {
            console.dir(result);
        })
    }catch(err){
        console.log(err);
    }   
});*/