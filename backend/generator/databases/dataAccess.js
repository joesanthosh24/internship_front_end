let mongoose = require('mongoose');
let bookSchema = require('./book_db');

bookSchema.statics = {
    create: function(data, cb) {
        let book = new this(data);
        book.save(cb);
    },
    get: function(query, cb) {
        this.find(query, cb);
    },
    getByTitle: function(query, cb) {
        this.find(query, cb);
    },
    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {
                $set: updateData
            }, {
                new: true
            }, cb
        );
    },
    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
};

let bookModel = mongoose.model('Books', bookSchema);
module.exports = bookModel;