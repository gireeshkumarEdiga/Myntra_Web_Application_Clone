const Cart = require("../Model/Cart");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const CartRoutesHandler =  async (req,res) => {

    const MEASURE = req.body.MEASURE;
    const ID = req.body.ID;
    const CATEGORY = req.body.CATEGORY;
    const BRAND = req.body.BRAND;
    const TITLE = req.body.TITLE;
    const RATING = req.body.RATING;
    const RATING_COUNT = req.body.RATING_COUNT;
    const PRICE_INR = req.body.PRICE_INR;
    const ORIGINAL_PRICE_INR = req.body.ORIGINAL_PRICE_INR;
    const DISCOUNT_PERCENTAGE = req.body.DISCOUNT_PERCENTAGE;
    const IMAGE = req.body.IMAGE;
    //const AUTH_TOKEN = req.body.AUTH_TOKEN
             

    if(MEASURE == "CREATE_MULTIPLE_CART"){

        await Cart.create({
            id : ID,
            category : CATEGORY,
            brand : BRAND,
            title : TITLE,
            rating : RATING,
            rating_count : RATING_COUNT,
            price_inr : PRICE_INR,
            original_price_inr : ORIGINAL_PRICE_INR,
            discount_percentage : DISCOUNT_PERCENTAGE,
            image : IMAGE
        });

        const isCartList = await Cart.find();

        if(isCartList){
            res.send({
                Message : "Cart List",
                Success : true,
                Data : isCartList
            });
        }else{
            res.send({
                Message : "Not Found",
                Success : false,
            });
        }

    }

    if(MEASURE == "GET_CART_LIST"){

        const isCartList = await Cart.find();

        if(isCartList){
            res.send({
                Message : "Cart List",
                Success : true,
                Data : isCartList
            });
        }else{
            res.send({
                Message : "Not Found",
                Success : false,
            });
        }

    }

    if(MEASURE == "REMOVE_ITEM_CART"){

        await Cart.deleteOne({
            id : ID,
            category : CATEGORY
        })

        const isCartList = await Cart.find();

        if(isCartList){
            res.send({
                Message : "Cart List",
                Success : true,
                Data : isCartList
            });
        }else{
            res.send({
                Message : "Not Found",
                Success : false,
            });
        }

    }

}

module.exports = {
    CartRoutesHandler
}