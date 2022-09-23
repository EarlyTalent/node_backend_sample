const Comment = require('../models/comment')

getComments = async (req, res) => {
    let id = req.params.id
    if (!id) {
        return res.status(400).json({ success: false, error: "missing id" })
    }

    await Comment.find({postId: id}, (err, comment) => {
    if (err) {
        return res.status(400).json({ success: false, error: err })
    }

    return res.status(200).json({ success: true, data: comment })
    }).catch(err => console.log(err))
}

module.exports = { getComments }