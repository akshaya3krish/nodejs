var express = require('express');
const collection = require('../utils/mongoConnection').connection();
var router = express.Router();
 

router.get('/logoutPage', function(req, res, next) {
    res.clearCookie('loginPageCookie');
    //res.send('loginPage cookie cleared');
    res.render('loginPage',{error:null, loginStatus:false});
});

module.exports = router;