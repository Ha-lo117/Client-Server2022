var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render("list",{title:"Users"});
});

router.get('/users-list', async function(req, res, next) {
  const users = require('../services/lenguages');
  
  //res.send('respond with a resource');
  try {
    res.json(await users.getUser(req.query.page));
  } catch (err) {
    console.error('Error' + err.message);
    next(err);
  }
});

module.exports = router;