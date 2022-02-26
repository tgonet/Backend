var express = require('express');
const Sequelize = require("sequelize");
const db = require("./db.js");
var app = express();


db.authenticate().then(() => {
   // sync
   db.sync({alter: true})
   .then(() => {
       console.log("db successfully connected");
   });
});

app.use("/student", require('./student.js'));

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