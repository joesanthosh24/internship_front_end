let mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
    commentText: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    bookTItle: String
});

module.exports = mongoose.model('Comments', commentSchema);