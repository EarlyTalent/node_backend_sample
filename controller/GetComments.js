const Blog = require('../models/blog')

getComments = async (req, res) => {
  var id = req.params.id;
  await Blog.find({"_id": id}, {comments: 1, _id: 0}, (err, blog) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!blog.length) {
      return res
        .status(404)
        .json({ success: false, error: `Blog not found` })
    }
    return res.status(200).json({ success: true, data: blog })
  }).catch(err => console.log(err))
}

module.exports = { getComments }