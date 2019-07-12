let Comment = require('../databases/comments');
let Router = require('express').Router();

Router.get('/', function(req, res, next) {
    Comment.find({}, function(err, comments) {
        if(err) {
            return res.json(err);
        }

        return res.json(comments);
    });
});

Router.get('/:bookTitle', function(req, res, next) {
    let bookTitle = req.params.bookId;

    Comment.find({ book: bookTitle }, function(err, comments) {
        if(err) {
            return res.json(err);
        }
        
        return res.json(comments);
    });
});

Router.get('/:userId', function(req, res, next) {
    let userId = req.params.userId;

    Comment.find({ user: userId }, function(err, comments) {
        if(err) {
            return res.json(err);
        }

        return res.json(comments);
    })
});

Router.post('/:bookTitle/:userId/addComment', function(req, res, next) {
    let bookTitle = req.params.bookTitle;
    let userId = req.params.userId;

    let comment = new Comment(
        {
            commentText: req.body.text,
            book: bookTitle,
            user: userId
        }
    );

    comment.save(function(err, comment) {
        if(err) {
            return res.json(err);
        }
        else {
            return res.json(comment);
        }
    });
});

module.exports = Router;