const Blog = require('../models/blog')

// ENDPOINT: /api/blog/post
const postBlog = async (req, res) => {
  const blog = await Blog.create(req.body);

  res.status(201).json({
    success: true,
    data: blog
})
}

module.exports = { postBlog }