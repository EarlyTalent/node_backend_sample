const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true
    },
    text: {
      type: String,
      trim: true,
      required: true
    },
    // A BLOG CAN HAVE MULTIPLE COMMENTS, SO COMMENTS SHOLD BE WITHIN AN ARRAY
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "comment"
      }]
  },{
    timestamps: true
  });

module.exports = mongoose.model('blog', blogSchema);