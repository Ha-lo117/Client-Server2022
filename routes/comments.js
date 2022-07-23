const { request } = require('express');
var express = require('express');
var router = express.Router();

const comments =  require("../services/comments");

router.get('/:id', async function(req, res, next) {
    try {
        res.json(await comments.getComments(req.params.id));
    } catch (error) {
        console.error('Error'+error.message);
        next(error);
    }
   });


module.exports = router;