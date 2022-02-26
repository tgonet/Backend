var express = require('express');
const Class = require("./models/class");
var router = express.Router();

router.get('/', function(req, res){
   res.send('GET route on class.');
});
router.post('/', function(req, res){
   res.send('POST route on class.');
});

router.get('/all', function(req, res){
   Class.findAll().then(classs => {
      res.json(classs);
   })
});

//export this router to use in our app.js
module.exports = router;