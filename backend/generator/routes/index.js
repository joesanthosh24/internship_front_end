var express = require('express');
var router = express.Router();

let Book = require('../databases/book_db');
let User = require('../databases/users');

router.get('/', function(req, res, next) {
  res.render('hello');
});

router.get("/books", function(req, res, next) {
  Book.find({}, function(err, data) {
    if(err) {
      console.log(err);
    }
    else {
      console.log('found');
      return res.json(data);
    }

    next();
  });
});

router.post("/books/addBook", function(req, res, next) {
  console.log(req.body);
  console.log('In books/addBook');

  let book = new Book(
    {
      title: req.body.bookInfo.title,
      genre: req.body.bookInfo.genre,
      img_src: req.body.bookInfo.img_src,
      hover: req.body.bookInfo.hover,
      show: req.body.bookInfo.show,
      mainDisplay: req.body.bookInfo.mainDisplay,
      rating: req.body.bookInfo.rating
    }
  );

  book.save(function(err) {
    if(err) {
      console.log(err);
      return res.json(err);
    }
    else {
      return res.json(book);
    }
  });
});

router.get("/books/:title", function(req, res, next) {
  console.log(req.params.title)
  Book.findOne({title: req.params.title}, function(err, data) {
    if(err) {
      console.log(err);
    }
    else {
      console.log('found');
      return res.json(data);
    }

    next();
  });
});

router.get('/books/showByGenre/:genre', function(req, res, next) {
  Book.find({genre: req.params.genre}, function(err, data) {
    if(err) {
      console.log(err);
    }
    else {
      console.log('found books');
      return res.json(data);
    }
  })
})

router.put("/books/edit/:id", function(req, res, next) {
  let { rating } = req.body;

  console.log('Inside put');

  // return res.json(book);

  Book.update({ _id: req.params.id }, { 
    rating: rating, 
  }, function(err, data) {
    console.log('Updating');

    if(err) {
      console.log(res.json(err));
      next();
    }
    else {
      return res.json(data);
    }
  });
});

router.delete("/books/delete/:id", function(req, res, next) {
  console.log('trying to delete');
  Book.findByIdAndRemove(req.params.id, { useFindAndModify: false }, function(err) {
    console.log('In database delete method');
    if(err) {
      console.log(err);
      next();
    }
    else {
      console.log('Book deleted');
      
      return res.json('deleted');
    }
  })
});

module.exports = router;