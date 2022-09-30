const express = require('express')
const {getBlogs} = require('../controller/getBlogs')
const {postBlog} = require('../controller/PostBlog')
const { getBlog } = require('../controller/getBlog')

const router = express.Router()

router.route('/blog').get(getBlogs)
router.route('/blog/:id').get(getBlog)
router.route('/blog/post').post(postBlog)

module.exports = router