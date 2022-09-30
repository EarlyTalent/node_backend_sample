const Blog = require('../models/blog')
const Comment = require('../models/comment')

const getComments = async (req, res) => {
    if (req.params.id) {
        const comments = await Comment.find({blog: req.params.id})
        return res.status(200).json({
            success: true,
            data: comments
        })
    }
}

module.exports = { getComments }