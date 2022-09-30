const Blog = require('../models/blog')

// Original given function returned all blogs
// ENDPOINT: /api/blog/:id
const getBlog = async (req, res) => {
   const blog = await Blog.findById(req.params.id)
    .exec()
    .then(
      (blog) => {
        return res.status(200).json({
            success: true,
            data: blog
        });
      },
      (error) => {
        console.log(error);
      }
    );
}

module.exports = { getBlog }