var mongoose = require('mongoose');
var Customer = require('./customer');
var express = require('express');
var app = express();
var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({'extended':'true'}));
var session=require('express-session');

app.get("/GirisKaydol",function(req,res){
    res.sendFile(__dirname+"/Web Sitesi.html");
});
app.get("/RehberGiris",function(req,res){
    res.sendFile(__dirname+"/Giris.html");
});
app.get("/WebKaydolSyf",function(req,res){
    res.sendFile(__dirname+"/kaydol.html");
});
app.use("/Resimler",express.static(__dirname + "/Resimler"));
app.use("/scripts",express(__dirname+"/scripts")); //script ekleme


mongoose.connect('mongodb+srv://grbln:admin@taban-jfh1j.mongodb.net/test?retryWrites=true',(error)=>{
    if(!error){
        console.log('baglandik')
    }
})
//--------veri tabanına kayıtalanı---------
app.get("/Kayit",function(req,res){
    res.sendFile(__dirname+"/kaydol.html");
});
app.post("/Kayit",function(req,res){
    KlncName = req.body["name"];
    KlncSurname = req.body["Surname"];
    KlncTel = req.body["Tel"];
    KlncEmail = req.body["email"];
    KlncSifre = req.body["Sifre"];
    //ekleme işlemi yapar veri tabanına
    var customer1 = new Customer({
        name :KlncName,
        surname :KlncSurname,
        tel:KlncTel,
        mail:KlncEmail,
        pas:KlncSifre
    })
    //hata varmı yokmu savaledimi yazar
    customer1.save((error)=>{
        if(error){
            throw error;
        }
        console.log("saved")
    })
    
    res.sendfile(__dirname+"/Rehber.html");
})
//---------veri tabanı kayıt bitiş-------------




app.get("/WebGiris",function(req,res){
    res.sendFile(__dirname+"/Giris.html");
});
app.post("/WebGiris",function(req,res){
    KlncGrsTel = req.body["GirisTel"];
    KlncGrsPas = req.body["GirisSifre"];
    //bulma işlemini yapar eğer ilgili birşey bulmak istersen find işleminin içine yaz 
    
    Customer.findOne({tel:KlncGrsTel,pas:KlncGrsPas},(error,data)=>{
        if(error){
            throw error;
        }
        if(data.tel == KlncGrsTel && data.pas == KlncGrsPas){            
             res.sendfile(__dirname + "/Rehber.html");
        }
        console.log("Kullanıcı Girisi basarılı"+data.name);
    });

    
});





/*
//bulur ve kaldırır olan veriyi
Customer.findOneAndRemove({name:'ali veli'},(error,data)=>{
    if(error){
        throw error;
    }
    console.log(data)
})*/

/*
//id ye göre güncelleme
Customer.findByIdAndUpdate('5cd5960d99a5e52f04f75319',{name:"ali veli"},(error,data)=>{
    if(error){
        throw error;
    }
    console.log(data)
})

*/

/*
// güncelleme işlemi
Customer.findOneAndUpdate({name:'Deniz mesar'},{name:"derin2 demir"},(error,data)=>{
    if(error){
        throw error;
    }
    console.log(data)
})
*/
app.listen(8000);