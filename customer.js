var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var customerSchema=new Schema({
    name:String,
    surname:String,
    tel:Number,
    mail:String,
    pas:String,

    created:Date

})

customerSchema.pre('save',function(next){
    var currentDate = new Date();

    this.created = currentDate;

    next();
 })

var Customer = mongoose.model('Customer',customerSchema)

module.exports = Customer
