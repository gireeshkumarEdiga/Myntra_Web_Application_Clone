const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({

    Bed_Linen_Furnishing : {
        type : Array,
        required : true
    },
    Flooring : {
        type : Array,
        required : true
    },
    Bath : {
        type : Array,
        required : true
    },
    Lamps_Lighting : {
        type : Array,
        required : true
    },
    Home_Décor : {
        type : Array,
        required : true
    },
    Cushions_Cushion_Covers : {
        type : Array,
        required : true
    },
    Curtains : {
        type : Array,
        required : true
    },
    Furniture : {
        type : Array,
        required : true
    },
    Home_Gift_Sets : {
        type : Array,
        required : true
    },
    Kitchen_Table : {
        type : Array,
        required : true
    },
    Storage : {
        type : Array,
        required : true
    },


}, { timestamps : true } );

module.exports = mongoose.model("Home",HomeSchema);