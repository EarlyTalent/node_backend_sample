const Blog = require('../models/blog')

postBlog = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a blog',
    })
  }

  const blog = new Blog(body)

  if (!blog) {
    return res.status(400).json({ success: false, error: err })
  }

  blog
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: blog._id,
        message: 'Blog post created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Blog post not created!',
      })
    })
}

// async function insertTemp() {
//   try {
//     await Blog.insertMany([
//       {
//         "id": "1"
//       },
//       {
//         "id": "2"
//       }
//     ]);
//   }
//   catch (error) {
//     console.log(error);
//   }
  
// }

// insertTemp();
module.exports = { postBlog }