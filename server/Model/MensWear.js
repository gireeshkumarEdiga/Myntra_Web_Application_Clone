const mongoose = require("mongoose");

const MensWearSchema = new mongoose.Schema({

    id : {
        type : Number,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    brand : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true
    },
    rating_count : {
        type : String,
        required : true
    },
    price_inr : {
        type : Number,
        required : true
    },
    original_price_inr : {
        type : Number,
        required : true
    },
    discount_percentage : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    },

},{timestamps : true});

module.exports = mongoose.model("MensWear",MensWearSchema)