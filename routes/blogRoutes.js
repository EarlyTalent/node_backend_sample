const express = require('express')
const {getBlogs} = require('../controller/getBlogs')
const {postBlog} = require('../controller/PostBlog')
const { getBlog } = require('../controller/getBlog')
const { getComments } = require('../controller/getComments')
const { createComment } = require('../controller/postComment')


const router = express.Router()

router.route('/blog').get(getBlogs)
router.route('/blog/:id').get(getBlog)
router.route('/blog/:id/comments').get(getComments).post(createComment)
router.route('/blog/post').post(postBlog)

module.exports = router