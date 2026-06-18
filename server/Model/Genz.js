const mongoose = require("mongoose");

const GenzSchema = new mongoose.Schema({

    Women_Western_Wear : {
        type : Array,
        required : true
    },
    Women_Ethnic_Wear : {
        type : Array,
        required : true
    },
    Lingerie_Loungewear : {
        type : Array,
        required : true
    },
    Men_Casual_Wear : {
        type : Array,
        required : true
    },
    Men_Occassion_Wear : {
        type : Array,
        required : true
    },
    Women_Footwear : {
        type : Array,
        required : true
    },
    Men_Footwear : {
        type : Array,
        required : true
    },
    Beauty_Grooming : {
        type : Array,
        required : true
    },
    Accessories : {
        type : Array,
        required : true
    },

}, { timestamps : true });

module.exports = mongoose.model("GenZ",GenzSchema);