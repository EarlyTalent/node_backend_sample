const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        text: {
            type: String,
            trim: true,
            required: true
        }
    }, {
    timestamps: true
});

module.exports = mongoose.model('comment', commentSchema);