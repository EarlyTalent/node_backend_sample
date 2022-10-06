const Comment = require("../models/comment");

getComments = async (req, res) => {
  const { id } = req.params;

  if (!Number(id)) {
    return res.status(500).json({
      success: false,
      error: "The comment id should be a number.",
    });
  }
  await Comment.find({ postId: id  }, (err, comment) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err,
      });
    }
    if (!comment) {
      return res.status(404).json({
        success: false,
        error: `Comments not found`,
      });
    }
    return res.status(200).json({
      success: true,
      data: comment,
    });
  }).catch((err) => console.log(err));
};

module.exports = { getComments };
