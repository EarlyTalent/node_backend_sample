const blog = require('../models/blog');
const Comment = require('../models/comment');


const postComment = async (req, res) => {
    //  grabs the id for the post which you want to creat a new comment
    const id = req.params.id;
    const comment = new Comment({
      text: req.body.comment,
      post: id
    })

    await comment.save();
    const relatedPost = await blog.findById(id);
    // pushes the comment for the blog you want to add it to 
    relatedPost.comment.push(comment);
    await relatedPost.save(function(err) {
        if (err) return res.status(400).json({success: false, error: err});

        // returns the pushed comment with its related blog post
        else{
            return res.status(200).json({success: true, data: blog})
        }
        
    })
}

module.exports =  { postComment }