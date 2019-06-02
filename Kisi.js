var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var customerSchema=new Schema({
    Kisiad:String,
    KisiEposta:String,
    KisiFace:String,
    KisiTwit:String,
    Kisiİnsta:String,
    KisiTel:String,

    created:Date

})

customerSchema.pre('save',function(next){
    var currentDate = new Date();

    this.created = currentDate;

    next();
 })

var Customer = mongoose.model('Customer',customerSchema)

module.exports = Customer
