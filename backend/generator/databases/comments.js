let mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
    commentText: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }
});

module.exports = mongoose.model('Comments', commentSchema);