const express = require('express');
const router = express.Router();
// IMPORTING BLOG & COMMENT CONTROLLERS
const GetBlogs = require('../controller/getBlogs');
const PostBlog = require('../controller/PostBlog');
const GetComments = require('../controller/getComments');
const PostComment = require('../controller/PostComment');

// BLOG ROUTES WITH PREFIX
router.get('/blog/:id', GetBlogs);
router.post('/blog/post', PostBlog);

// COMMENT ROUTES
router.get('/blog/post/:id/comment', GetComments);
router.post('/blog/post/:id/comment', PostComment);


module.exports = router