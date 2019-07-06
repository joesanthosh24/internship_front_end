let mongoose = require('mongoose');

let dbURL = 'mongodb://localhost:27017/db_books'

module.exports = function() {
    mongoose.connect(dbURL, { useNewUrlParser: true });

    mongoose.connection.on('connected', function() {
        console.log('connected');
    });

    mongoose.connection.on('error', function() {
        console.log('error');
    });

    mongoose.connection.on('disconnected', function() {
        console.log('disconnected');
    });
}