const mongoose = require("mongoose");

const BeautySchema = new mongoose.Schema({
    
    Makeup : {
        type : Array,
        required : true
    },
    Skincare_Bath_Body : {
        type : Array,
        required : true
    },
    Baby_Care : {
        type : Array,
        required : true
    },
    Masks : {
        type : Array,
        required : true
    },
    Haircare : {
        type : Array,
        required : true
    },
    Fragrances : {
        type : Array,
        required : true
    },
    Appliances : {
        type : Array,
        required : true
    },
    Men_Grooming : {
        type : Array,
        required : true
    },
    Beauty_Gift_Makeup_Set : {
        type : Array,
        required : true
    },
    Premium_Beauty : {
        type : Array,
        required : true
    },
    Wellness_Hygiene : {
        type : Array,
        required : true
    },
    Top_Brands : {
        type : Array,
        required : true
    },
}, { timestamps : true });

module.exports = mongoose.model("Beauty",BeautySchema);