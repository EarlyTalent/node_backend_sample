const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
I could not find the resources folder with the example 
json for comments so I used a modified Blog. Not very 
creative on my part, but thinking from a user it already
contains all the information I would want from a comment
on my blog post. I left the id property because I imagine
in the real world there would be a need to access this specific
comment. 
*/

const Comment = new Schema({
  commentId: { type: String, required: true },
  postId: { type: String, required: true },
  author: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
});

module.exports = mongoose.model("comment", Comment);
