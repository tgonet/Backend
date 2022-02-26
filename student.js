var express = require('express');
const Student = require("../models/student");
var router = express.Router();

router.get('/', function(req, res){
   res.send('GET route on students.');
});
router.post('/', function(req, res){
   res.send('POST route on students.');
});

router.get('/all', function(req, res){
   Student.findAll.then(student => {
      res.json(student);
   })
});

//export this router to use in our app.js
module.exports = router;