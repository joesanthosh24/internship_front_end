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

Router.get('/:bookId', function(req, res, next) {
    let bookId = req.params.bookId;

    Comment.find({ book: bookId }, function(err, comments) {
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

Router.post('/:bookId/:userId/addComment', function(req, res, next) {
    let bookId = req.params.bookId;
    let userId = req.params.userId;

    let comment = new Comment(
        {
            commentText: req.body.text,
            book: bookId,
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