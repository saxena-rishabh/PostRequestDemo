var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/",function (req,res){
    res.render("home");
});

app.get("/friends",function (req,res){
    var friends = ["tony","lily","saksham","sanyam","jonny"];
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started!!!");
});