let Books = require('./dataAccess');

exports.addNewBook = function(req, res, next) {
    let book = {
        title: req.body.title,
        genre: req.body.genre,
        rating: req.body.rating,
        img_src: req.body.image_url,
        show: true,
        mainDisplay: true,
        hover: false
    };

    console.log('Adding new book');

    Books.create(book, function(err, data) {
        if(err) {
            res.json({ error: err });
        }
        else {
            res.json({ message: 'Added New Book' });
        }
    });
};

exports.getBook = function(req, res, next) {
    Books.get({}, function(err, books) {
        if(err) {
            res.json({ error: err });
        }
        else {
            res.json({ books});
        }
    })
};

exports.getBookByTitle = function(req, res, next) {
    Books.getByTitle({title: req.params.title}, function(err, book) {
        if(err) {
            res.json({
                error: err
            });
        }
        else {
            res.json({
                message: book
            })
        }
    });
}

exports.updateBook = function(req, res, next) {
    let book = {
        title: req.body.title,
        genre: req.body.genre,
        rating: req.body.rating,
        img_src: req.body.image_url,
        show: true,
        mainDisplay: true,
        hover: false
    };

    Books.update({ title: req.params.title }, book, function(err, updatedBook) {
        if(err) {
            res.json({
                error: err
            });
        }
        else {
            res.json({
                message: 'Book Updated'
            });
        }
    });
};

exports.deleteBook = function(req, res, next) {
    Books.delete({ title: req.params.title }, function(err, book) {
        if(err) {
            res.json({
                error: err
            });
        }
        else {
            res.json({
                message: 'Book Deleted'
            });
        }
    });
};