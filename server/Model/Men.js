const mongoose = require("mongoose");

const MenSchema = new mongoose.Schema({

    Topwear : {
        type : Array,
        required : true
    },
    Indian_Festive_Wear : {
        type : Array,
        required : true
    },
    Bottomwear : {
        type : Array,
        required : true
    },
    Innerwear_Sleepwear : {
        type : Array,
        required : true
    },
    Plus_Size : {
        type : Array,
        required : true
    },
    Footwear : {
        type : Array,
        required : true
    },
    Personal_Care_Grooming : {
        type : Array,
        required : true
    },
    Sunglasses_Frames : {
        type : Array,
        required : true
    },
    Watches : {
        type : Array,
        required : true
    },
    Sports_Active_Wear : {
        type : Array,
        required : true
    },
    Gadgets : {
        type : Array,
        required : true
    },
    Fashion_Accessories : {
        type : Array,
        required : true
    },
    Bags_Backpacks : {
        type : Array,
        required : true
    },
    Luggages_Trolleys : {
        type : Array,
        required : true
    }

},{ timestamps : true });

module.exports = mongoose.model("Men",MenSchema);