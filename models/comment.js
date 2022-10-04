const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating new Comment schema for requiring text and adding date & its post ref

const Comment =  new Schema ({
    text: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }

})

module.exports = mongoose.model('comment', Comment)