var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.send('respond with a resource');
})
router.get('/userInfo', userController.showUser)
router.get('/login', function(req, res, next) {
  console.log(req);
  res.send('respond with a resource');
})

module.exports = router;
