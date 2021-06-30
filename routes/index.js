var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(_req,res,next) => {res.render('index',{title:'DHSchools'})});

module.exports = router;
