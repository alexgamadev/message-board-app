const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages });
});

/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Create New Message' });
});

router.post('/new', function(req, res, next) {
  const { user, message } = req.body;
  messages.push({
    text: message,
    user,
    added: new Date()
  });
  res.redirect('/');
});

module.exports = router;
