const Comment = require('../models/comment')

// ENDPOINT: GET /api/blog/:id/comments (id = blog ID)

const getComments = async (req, res) => {
    if (req.params.id) {
        const comments = await Comment.find({blog: req.params.id})
        return res.status(200).json({
            success: true,
            data: comments
        })
    } else {
        res.status(200).json({
            success: true,
            data: `No comments found.`
        })
    }
}

module.exports = { getComments }