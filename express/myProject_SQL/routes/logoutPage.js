var express = require('express');
var router = express.Router();
const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const sql = require('mssql');
const connObj = require('../utils/sqlConnection');
require('dotenv').config();

router.get('/logoutPage', function(req, res, next) {
    res.clearCookie('sqlCookie');
    res.render('loginPage',{error:null, loginStatus:false});
});

module.exports = router;