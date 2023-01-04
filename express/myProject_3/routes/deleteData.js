var express = require('express');
var router = express.Router();
const collection = require('../utils/mongoConnection').connection();


router.get('/deleteData', async function(req, res, next) {
    const name = req.query.Name;
    try{
        const deleteResult = await (await collection).deleteOne({Name:name});
        const data = await (await collection).find().toArray();
        console.log('Cookies:', req.cookies);
        let loginStatus = false;
        if(req.cookies !== null || req.cookies !== undefined)
        {
            loginStatus = true;
        }
        res.render('showData', { data, loginStatus });
    }catch(err){
        console.error(err);
        res.status(500).send('Some Error in Delete operation');
    }
});

module.exports = router;