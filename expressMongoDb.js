var mongoose = require('mongoose')
var Customer = require('./customer')

mongoose.connect('mongodb+srv://grbln:admin@taban-jfh1j.mongodb.net/test?retryWrites=true',(error)=>{
    if(!error){
        console.log('baglandik')
    }
})



/*
//id ile silme işlemi yaptık
Customer.findById('5cd59339c7858a3150b56b1d',(error,data)=>{
    if(error){
        throw error;
    }
    data.remove((error)=>{
        if(error){
            throw error;
        }
        console.log("Delete")
    })
});*/


/*
//güncelleştirme yapar id yi bulur istenine ni değiştiri
Customer.findById('5cd59052e5f85c2f34e58fe7',(error,data)=>{
    if(error){
        throw error;
    }
    data.city='Antalya'
    data.save((error)=>{
        if(error){
            throw error;
        }
        console.log("Update")
    })
});
*/

/*
//select city ve name leri getirir sadece equals ankara yı getitrir sadece
Customer.find({},(error,data)=>{
    if(error){
        throw error;
    }
    console.log(data)
}).where('city').equals('Ankara').sort('name').select('city name');

//short alfabetik sıralama işlemi yapar
*/

/*
//id bulmaya yarar
Customer.findById('5cd59052e5f85c2f34e58fe7',(error,data)=>{
    if(error){
        throw error;
    }
    console.log(data)
})*/

/*
//bulma işlemini yapar eğer ilgili birşey bulmak istersen find işleminin içine yaz
Customer.find({},(error,data)=>{
    if(error){
        throw error;
    }
    console.log(data)
})*/

/*
//ekleme işlemi yapar veri tabanına
var customer1 = new Customer({
    name:"Derin mesar",
    city:"Ankara"
})
//hata varmı yokmu savaledimi yazar
customer1.save((error)=>{
    if(error){
        throw error;
    }
    console.log("saved")
})*/