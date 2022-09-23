const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
  postId: { type: String, required: true },
  commentData: { type: String, required: true }
})

module.exports = mongoose.model('comment', Comment)