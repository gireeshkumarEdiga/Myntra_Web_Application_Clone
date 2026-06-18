const mongoose = require("mongoose");

const WomenSchema = new mongoose.Schema({

    Indian_Fusion_Wear : {
        type : Array,
        required : true
    },
    Belts_Scarves_More : {
        type : Array,
        required : true
    },
    Watches_Wearables : {
        type : Array,
        required : true
    },
    Western_Wear : {
        type : Array,
        required : true
    },
    Plus_Size : {
        type : Array,
        required : true
    },
    Maternity : {
        type : Array,
        required : true
    },
    Sunglasses_Frames : {
        type : Array,
        required : true
    },
    Footwear : {
        type : Array,
        required : true
    },
    Sports_Active_Wear : {
        type : Array,
        required : true
    },
    Lingerie_Sleepwear : {
        type : Array,
        required : true
    },
    Beauty_Personal_Care : {
        type : Array,
        required : true
    },
    Gadgets : {
        type : Array,
        required : true
    },
    Jewellery : {
        type : Array,
        required : true
    },
    Backpacks : {
        type : Array,
        required : true
    },
    Handbags_Bags_Wallets : {
        type : Array,
        required : true
    },
    Luggages_Trolleys : {
        type : Array,
        required : true
    },

},{ timestamps : true });

module.exports = mongoose.model("Women",WomenSchema);

