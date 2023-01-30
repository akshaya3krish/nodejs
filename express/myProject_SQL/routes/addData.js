var express = require('express');
const sql = require('mssql');
const connObj = require('../utils/sqlConnection');
var router = express.Router();
const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');

router.get('/openAddDataForm', function(req, res, next) {
  let loginStatus = false;
  if(Object.keys(req.cookies).length !==0){
  loginStatus = true;
    connObj.connection().then(async (pool)=> {

      const tokenVerify = jwt.verify(req.cookies.sqlCookie, 'express-sqlProject');
      console.log("Verified Token:", tokenVerify);
        res.render('showAddDataForm', {loginStatus});
    }).catch((err)=> {
        console.log(err);
    });
  }else{
    res.redirect('/loginPage');
  }
});
router.post('/addNewData', async function(req, res, next) {
    try{
      let loginStatus = false;
      if(Object.keys(req.cookies).length !==0){
      loginStatus = true;
        connObj.connection().then(async (pool)=> {

        const tokenVerify = jwt.verify(req.cookies.sqlCookie, 'express-sqlProject');
        console.log("Verified Token:", tokenVerify);
        const request = await pool.request();
        request.input('EmpID', sql.Int, req.body.EmpID);
        request.input('EmpFirstName', sql.VarChar, req.body.EmpFirstName);
        request.input('EmpLastName', sql.VarChar, req.body.EmpLastName);
        request.input('Address', sql.VarChar, req.body.Address);
        request.input('City', sql.VarChar, req.body.City);
        let insertTableResult = await request.query(
            'INSERT INTO Employees(EmpID,EmpFirstName,EmpLastName,Address,City) VALUES(@EmpID,@EmpFirstName,@EmpLastName,@Address,@City)');
        const tablename = 'Employees';
        const tableResult = await pool.request().query(`select * from ${tablename}`);
        res.render('showData', {data:tableResult.recordset, loginStatus:true });
    });
    }else{
      res.redirect('/loginPage');
    }
    }catch(err) {
        res.status(500).send('Some Error in Insertion.');
    }

});
module.exports = router;


/*router.post('/addNewData', async function(req, res, next) {
    const postedData = req.body;
    connObj.connection().then(async (pool)=> {
        const tablename = 'Employee';
        const insertTableResult = await pool.request().query(`INSERT INTO ${tablename} VALUES`);
        console.dir(insertTableResult);
        res.render('showData', {data:tableResult.recordset});
      }).catch((err)=> {
        res.status(500).send('Some Error in Insertion.');
      });
     
      });*/