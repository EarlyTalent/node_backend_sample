const Comment = require('../models/comment')

postComment = (req, res) => {
    const id = req.params.id
    if (!id) {
        return res.status(400).json({ success: false, error: "missing id" })
    }
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a comment',
        })
    }

    const comment = new Comment({
        postId: id,
        commentData: body.commentData
    })

    if (!comment) {
        return res.status(400).json({ success: false, error: err })
    }

    comment
    .save()
    .then(() => {
        return res.status(201).json({
        success: true,
        id: comment._id,
        message: 'Comment posted!',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message: 'Comment not posted!',
        })
    })
}

module.exports = { postComment }