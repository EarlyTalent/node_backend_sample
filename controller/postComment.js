const Comment = require("../models/comment");

/*
Also ripping off blog again,  I somewhat feel I 
am not demonstrating much in terms of knowledge
but also I do not want to reinvent the wheel
*/

postComment = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a comment",
    });
  }

  const comment = new Comment(body);

  if (!comment) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }

  comment
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: comment._id,
        message: "Comment created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Comment not created!",
      });
    });
};

module.exports = { postComment };
