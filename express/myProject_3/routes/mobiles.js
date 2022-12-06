var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mobiles', function(req, res, next) {
  res.render('mobiles', { title: 'iPhone', 
  model: 'iPhone 14 Pro max', 
  category1: "iPhone 14 Pro max 128GB", 
  category2: "iPhone 14 Pro max 256GB", 
  category3: "iPhone 14 Pro max 512GB"});
});

module.exports = router;
