const express = require('express')
const {getBlogs} = require('../controller/getBlogs')
const {postBlog} = require('../controller/PostBlog')

const router = express.Router()

router.route('/blog/:id').get(getBlogs)
router.route('/blog/post').post(postBlog)

module.exports = router