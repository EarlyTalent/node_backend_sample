const express = require('express')
const GetBlogs = require('./controller/getBlogs')
const PostBlog = require('./controller/postBlog')
const GetComment = require('../controller/getComment')
const PostComment = require('../controller/postComment')

const router = express.Router()

router.get('/blog/:id', GetBlogs)
router.post('/blog/post', PostBlog)
//router.get('/blog/:id/comment', GetComment)
//router.post('/blog/:id/post', PostComment)

module.exports = router