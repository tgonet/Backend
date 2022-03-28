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

app.get('/datetest', function(req, res){
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
      diff2 = x.getDate() - day + (day == 0 ? -2:5);
      console.log("Monday:" + new Date(x.setDate(diff1).toLocaleString));
      console.log("Friday:" + new Date(x.setDate(diff2)));
   }
   res.send("date test")
});

app.get('/uuid', function(req, res){
   console.log();
   res.send(uuid.v4());
});

app.get('/:id/:type', function(req, res){
   res.send(req.params.id + " " + req.params.type);
});

app.listen(process.env.PORT);