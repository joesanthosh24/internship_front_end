let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

let userSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        }
    ]
});

let User = module.exports = mongoose.model('User', userSchema);

module.exports.createUser = function(newUser, cb) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(cb);
        });
    });
};

module.exports.comparePassword = function(passedPassword, hash, cb) {
    bcrypt.compare(passedPassword, hash, function(err, passwordSuccess) {
        if(err) {
            return console.error(err);
        }
        
        cb(null, passwordSuccess);
    });
};

module.exports.getUserByUserName = function(username, cb) {
    User.findOne({ username }, cb);
};

module.exports.getUserById = function(id, cb) {
    User.findById(id, cb);
};