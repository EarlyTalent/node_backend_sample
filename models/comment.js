const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
    // Comment Body
    body: {
        type: String,
        required: true
    },
    // Associated Blog
    blog: {
        type: mongoose.Schema.ObjectId,
        ref: "blog",
        required: true
    }
})

module.exports = mongoose.model('Comment', Comment)