var express=require("express");
var app = express();
var mongodb = require("mongodb");
var mongoclient = mongodb.MongoClient;

app.get("/veritabani",function(req,res){

    mongoclient.connect("mongodb://127.0.0.1:127017/deneme",function(err,db){
     
        if(err){
            res.send("asdas");
        }
        else{
            res.send("65165");
        }
    });
    
});


app.listen(8080);