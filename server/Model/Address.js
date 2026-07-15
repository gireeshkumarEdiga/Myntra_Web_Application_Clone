const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    id : {
        type : Number,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    mobile : {
        type : String,
        required : true
    },
    pincode : {
        type : String,
        required : true
    },
    street : {
        type : String,
        required : true
    },
    locality : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    addressType : {
        type : String,
        required : true
    },
    isDefaultAddress : {
        type : String,
        required : true
    }

},{timestamps : true});

module.exports = mongoose.model("Address",AddressSchema);