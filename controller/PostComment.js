const router = require('express').Router();
const db = require('../models');
const cors = require('cors');

// POST A COMMENT
router.post('/blog/post/:id/comment', cors(), (req, res) => {
  // console.log(req.body);
  const {id, text} = req.body;
  db.Comment.create({text})
    .then((dbComment) => {
      db.Blog.findByIdAndUpdate({_id: id}, { $push: { comments: dbComment._id }}, { new: true })
        .then((result) => {
          // console.log(result);
          res.json(dbComment);
        })
      // console.log(dbComment);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
});

// EXPORT ROUTES for API
module.exports = router;