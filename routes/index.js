const express = require('express')
const GetBlogs = require('../controller/getBlogs')
const PostBlog = require('../controller/PostBlog')
const GetComments = require('../controller/GetComments')
const PostComment = require('../controller/PostComment')

const router = express.Router()

router.get('/blog/:id', GetBlogs.getBlogs)
router.post('/blog/post', PostBlog.postBlog)
router.get('/blog/:id/comment', GetComments.getComments)
router.post('/blog/:id/comment', PostComment.postComment)

module.exports = router