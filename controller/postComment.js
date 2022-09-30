const Blog = require('../models/blog')
const Comment = require('../models/comment')

// ENDPOINT: POST /api/blog/:id/comments (id = blog ID)
const createComment = async (req, res) => {
    // Attach blog id to request body
    req.body.blog = req.params.id

    // Ensure blog exists
    const blog = await Blog.findById(req.params.id)

    const comment = await Comment.create(req.body)

    res.status(201).json({
        success: true,
        data: comment
    })
}

module.exports = { createComment }