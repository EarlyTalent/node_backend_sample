const Blog = require('../models/blog')

const postBlog = async (req, res) => {
  const blog = await Blog.create(req.body);
}

module.exports = { postBlog }