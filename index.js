const express = require('express')
const GetBlogs = require('../controller/getBlogs')
const PostBlog = require('../controller/postBlog')

const GetComments = require('../controller/getComments')
const postComments = require('../controller/postComments')

const router = express.Router()

router.get('/blog/:id', GetBlogs.getBlogs)
router.post('/blog/post', PostBlog.postBlog)

// setting up the endpoints to use for getComments & postComments
router.get('blog/post/:id/comment', GetComments.getCommments)
router.post('blog/post/:id/comment', postComments.postComment)

module.exports = router