var express = require('express');
var router = express.Router();
let passport = require('passport');

let User = require('../databases/users');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
//   next();
// });

router.post('/login', passport.authenticate('local'), function(req, res, next) {
  return res.send(req.user);
});

router.get('/logOut', function(req, res, next) {
  req.logout();
  return res.json('logged out');
});

// router.post('/:id/findBook', function(req, res, next) {
//   User.find({_id: req.params.id}, function(err, user) {
//     if(err) {
//       return res.json(err);
//     }
//   })
// })

router.post('/signUp', function(req, res, next) {
  let { email, username, password } = req.body;
  let newUser = new User({ username, password, email });

  User.createUser(newUser, function(err, savedUser) {
    if(err) {
      res.json(err);
      next();
    }

    return res.json(savedUser);
  })
});

module.exports = router;