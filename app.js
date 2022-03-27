var express = require('express');
const Sequelize = require("sequelize");
const uuid = require("uuid");
const db = require("./db");
var app = express();


db.authenticate().then(() => {
   // sync
   db.sync({alter: true})
   .then(() => {
       console.log("db successfully connected");
   });
});

app.use("/student", require('./student.js'));
app.use("/class", require('./class.js'));

//Simple request time logger
app.use(function(req, res, next){
   console.log("A new request received at " + Date.now());
   
   //This function call is very important. It tells that more processing is
   //required for the current request and is in the next middleware
   //function route handler.
   next();
});

app.get('/', function(req, res){
   //console.log(uuid.v4());
   let x = new Date();
   let day = x.getDay();
   first = 1;
   last = 5;
   if (day > 5){
      console.log("Monday:" + x - (day - first));
      console.log("Friday:" + x + (last - day));
   }
   else{
      diff1 = x.getDate() - day + (day == 0 ? -6:1);
      diff2 = x.getDate() - day + (day == 0 ? -6:5);
      console.log("Monday:" + diff1);
      console.log("Friday:" + diff2);
   }
   res.send("Hello world!");
});

app.get('/:id/:type', function(req, res){
   res.send(req.params.id + " " + req.params.type);
});

app.listen(process.env.PORT);