var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('GET route on moives.');
});
router.post('/', function(req, res){
   res.send('POST route on movies.');
});

//export this router to use in our app.js
module.exports = router;