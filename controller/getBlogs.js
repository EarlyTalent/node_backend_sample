const Blog = require('../models/blog')

getBlogs = async (req, res) => {
  // This method returns all blogs, but the route given is expected to return
  // a specific blog based on id
  await Blog.find({}, (err, blog) => {
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

module.exports = { getBlogs }