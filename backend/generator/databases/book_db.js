let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let bookSchema = new Schema({
        title: String,
        genre: String,
        img_src: String,
        hover: Boolean,
        show: Boolean,
        mainDisplay: Boolean,
        rating: Number
    }
);

module.exports = mongoose.model('Book', bookSchema);