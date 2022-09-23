const express = require('express')
const { getBlogs } = require('../controller/getBlogs')
const { postBlog } = require('../controller/postBlog')
const { getComments } = require('../controller/getComments')
const { postComments } = require('../controller/postComment')


const router = express.Router()

router.get('/blog/:id', getBlogs)
router.post('/blog/post', postBlog)

// New Routes
router.get('/blog/post/:id/comment', getComments)
router.post('/blog/post/:id/comment', postComment)

module.exports = router