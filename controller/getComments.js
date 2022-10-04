const Blog = require('../models/blog')

getCommments = async (req, res) => {
    // gets the id off the request
    let blogId = req.params.id;

    // use it to find the related blog post
    Blog.findById(blogId, function(err, blog) {
        if (err) {
            return res.status(400).json({success: false, error: err});
        }
        if (!blog.length) {
            return res
            .status(404)
            .json({success: false, error: 'Blog not found'})
        }
        // if blog is found by id , returns the comments and blog as json
        else{
            return res.status(200).json({success: true, data: blog})
        }
    }) .catch(err => console.log(err));
}

module.exports = { getCommments }