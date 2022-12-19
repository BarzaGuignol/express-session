var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/session-in', (req, res) => {
  req.session.song = "be bop a lula";
  console.log(req.session);
  res.send('OK');
});

router.get('/session-out', (req, res) => {
  res.send(req.session.song);
});

module.exports = router;
