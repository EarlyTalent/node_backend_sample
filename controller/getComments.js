const router = require('express').Router();
const mongojs = require("mongojs");
const db = require('../models');
const cors = require('cors');

// GET COMMENT BY ID
router.get('/blog/post/:id/comment', cors(), (req, res) => {
  db.Comment.findOne({
    _id: mongojs.ObjectId(req.params.id)
  },
  (error, data) => {
    if (error) {
      res.send(error);
      // console.log(error);
    } else {
      res.send(data);
    }
  });
});


module.exports = router