var express = require('express');
var router = express.Router();

/*Get listing*/
router.get('Weather API/' , function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;