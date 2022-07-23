const { request } = require('express');
var express = require('express');
var router = express.Router();

const posts =  require("../services/post");

/* GET lenguages listing. */
router.get('/', async function(req, res, next) {
 try {
     res.json(await posts.getPosts(req.query.page));
 } catch (error) {
     console.error('Error'+error.message);
     next(error);
 }
});

module.exports = router;