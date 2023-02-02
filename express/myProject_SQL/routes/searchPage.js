var express = require('express');
const sql = require('mssql');
const connObj = require('../utils/sqlConnection');
var router = express.Router();
const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
var Json2csvParser = require('json2csv').Parser;
const fs = require('fs');
//const { response } = require('../app');
var nodemailer = require('nodemailer');



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
        var mssql_data = JSON.parse(JSON.stringify(dropDownResult.recordset));
        var file_header = ['EmpID', 'EmpFirstName', 'EmpLastName', 'Address', 'City'];
        var json_data = new Json2csvParser({file_header});
        var csv_data = json_data.parse(mssql_data);
        fs.writeFileSync('./sample_data.csv',csv_data);
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment; filename=sample_data.csv");
        
        res.status(200).end(csv_data);
        


        //sending email using node mailer
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          host:'smtp.gmail.com',
          port:465,
          secure: true,
          auth: {
            user: 'nodejsbatch3@gmail.com',
            pass: 'qesftrocbqoaurgm',
          }
        });
        
        var mailOptions = {
          from: 'nodejsbatch3@gmail.com',
          to: 'nodejsbatch3@gmail.com',
          subject: 'Sending Email using Node.js',
          text: 'This is the email from MyProject SQL!',
          attachments: [
            {
              filename: 'sample_data.csv',
              path: "F:/nodejs/nodejs/express/myProject_SQL/sample_data.csv",
            }]
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent successfully: ' + info.response);
          }
          //res.render('searchResult', {data:dropDownResult.recordset});
        });
       
        
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