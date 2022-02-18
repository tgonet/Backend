var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/help', function(req, res){
   res.send("Hello!");
});

app.listen(process.env.PORT || 3000);