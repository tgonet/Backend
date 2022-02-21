var express = require('express');
var app = express();

app.use("/movies", require('./movies.js'));


//Simple request time logger
app.use(function(req, res, next){
   console.log("A new request received at " + Date.now());
   
   //This function call is very important. It tells that more processing is
   //required for the current request and is in the next middleware
   //function route handler.
   next();
});

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/:id/:type', function(req, res){
   res.send(req.params.id + " " + req.params.type);
});

app.listen(process.env.PORT);