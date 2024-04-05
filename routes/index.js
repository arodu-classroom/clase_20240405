var express = require('express');
var router = express.Router();

/* GET home page. */

// request
// response
// next

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Programación 2, 2024-1',
    name: 'Luis Mendoza',
    dni: '12345678',
  });
});

module.exports = router;
