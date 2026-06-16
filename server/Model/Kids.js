const mongoose = require("mongoose");

const KidsSchema = new mongoose.Schema({

    Boys_Clothing : {
        type : Array,
        required : true
    },
    Girls_Clothing : {
        type : Array,
        required : true
    },
    Footwear : {
        type : Array,
        required : true
    },
    Toys_Games : {
        type : Array,
        required : true
    },
    Infants : {
        type : Array,
        required : true
    },
    Home_Bath : {
        type : Array,
        required : true
    },
    Personal_Care : {
        type : Array,
        required : true
    },
    Kids_Accessories : {
        type : Array,
        required : true
    },
    Brands : {
        type : Array,
        required : true
    },

},{ timestamps : true });

module.exports = mongoose.model("Kids",KidsSchema);