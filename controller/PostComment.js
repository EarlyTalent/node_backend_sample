const Comment = require('../models/Comment')
const Blog = require('../models/blog')

postComment = async(req, res) => {
    const body = req.body
    if (body.author == undefined || body.text == undefined) {
      return res.status(400).json({
        success: false,
        error: 'You must provide a comment',
      })
    }

    var id = req.params.id; //_id param of blog

    //---- Creates a new database just for comments ----\\

    //uncomment line 18, 23, and line 7 in ./models/Comment.js to put comments in their own database
    //body.Blogid = id; 
    const comment = new Comment(body)
    if (!comment) {
      return res.status(400).json({ success: false, error: err })
    }
    //await comment.save()

    //---- Creates a new database just for comments ----\\



    //------ Checks if blog exists ------\\

    await Blog.find({"_id": id}, (err, blog) => {
      if (err) {
        return res.status(400).json({ success: false, error: err })
      }
      if (!blog.length) {
        return res
          .status(404)
          .json({ success: false, error: `Blog not found` })
      }
      return res.status(200).json({ success: true, data: comment })
    }).catch(err => console.log(err))

    //------ Checks if blog exists ------\\

    if(res.statusCode == 200) { await Blog.findOneAndUpdate({"_id": id}, {$push: {"comments": comment}}); } //Pushes comment into array if blog exists
}

module.exports = { postComment }