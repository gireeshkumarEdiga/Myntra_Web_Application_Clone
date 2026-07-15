const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema({

    id : {
        type : Number,
        required : true,
    },
    category : {
        type : String,
        required : true
    },
    discount : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }

},{ timestamps : true });

module.exports = mongoose.model("Categories",CategoriesSchema);