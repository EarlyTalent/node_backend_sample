const Blog = require('../models/blog')

const getBlog = async (req, res) => {
   const blog = await Blog.findById(req.params.id)
    .exec()
    .then(
      (blog) => {
        return res.status(200).json({
            data: blog
        });
      },
      (error) => {
        console.log(error);
      }
    );
}

module.exports = { getBlog }