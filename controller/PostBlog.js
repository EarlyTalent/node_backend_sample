const router = require('express').Router();
const db = require('../models');
const cors = require('cors');

// POST A BLOG
router.post('/blog/post', cors(), ({ body }, res) => {
  db.Blog.create(body)
    .then((dbBlog) => {
      res.json(dbBlog);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
});


module.exports = router