const router = require('express').Router();
const mongojs = require('mongojs');
const db = require('../models');
const cors = require('cors');

// GET BLOG BY ID
router.get('/blog/:id', cors(), (req, res) => {
  db.Blog.findOne({
    _id: mongojs.ObjectId(req.params.id)
  },
  (error, data) => {
    if (error) {
      res.send(error);
      // console.log(error);
    } else {
      res.send(data);
    }
  }).populate('comments');
});
   

module.exports = router