const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const MensWear = require("../Model/MensWear");

const mensWearRoutesHandler = async (req,res) => {

    const MEASURE = req.body.MEASURE;

    if(MEASURE == "CREATE_MULTIPLE_MENSWEARS"){

        await MensWear.insertMany([
                {
                    "id": 1,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Men Cotton Shirts (Olive Gold)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2026/JANUARY/19/9evO0Zlz_b905234b00994ccaa6d19b605a89518e.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 2,
                    "category": "MenTopWear",
                    "brand": "Wear Your Opinion",
                    "title": "Printed Casual Shirt (Graphic Multicolor)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MAY/8/JQyBXo95_41a8d19ec547463e9e0a18260b76ef47.jpg",
                    "rating": 3.3,
                    "rating_count": "12",
                    "price_inr": 549,
                    "original_price_inr": 2499,
                    "discount_percentage": 78
                },
                {
                    "id": 3,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Slim Fit Casual Shirt (White / Short Sleeve)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2026/JANUARY/6/8t7EKkJw_c6868b3924a04ff8b4331da8aebabecc.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 4,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Casual Shirt (Mint Green)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/22/H8yiVcQh_15774b09d27543b098cc16d391928d01.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 5,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Regular Fit Casual Shirt (Peach Pink)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/29/znfBMcWO_0873f3d5b7174c04ab57632a886cbb02.jpg",
                    "rating": 1.8,
                    "rating_count": "6",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 6,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Slim Fit Casual Shirt (Cream / Off-White)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2026/JANUARY/9/M0yvixsd_e880f070834240b98370f67516133264.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 7,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Casual Shirt (Khaki Beige)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/22/teghgvSQ_04db01c587ff4c6c81e383787956d2df.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 8,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Regular Fit Casual Shirt (Navy Blue)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/29/QDSUbBCY_83f5ebe95a604dce89f4b480bc8c66de.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 9,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Men Shirt (Olive Green)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/30/p2Wqxkzc_7e2fe8e465fa480c8ab77a63b0c0002e.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 10,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Regular Fit Casual Shirt (Burgundy Maroon)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/30/p2Wqxkzc_7e2fe8e465fa480c8ab77a63b0c0002e.jpg",
                    "rating": 4.2,
                    "rating_count": "5",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 11,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Regular Fit Casual Shirt (Light Blue / Beach)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/30/p2Wqxkzc_7e2fe8e465fa480c8ab77a63b0c0002e.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 12,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Casual Shirt (White / Long Sleeve)",
                    "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2025/NOVEMBER/30/2DiWwr39_71b86457583b4f548683a2465750d9ba.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 13,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Regular Fit Casual Shirt (Lime Green)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/NOVEMBER/30/LDQ7ALOa_256210adf3d7480fa8eba83f36bdbddf.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 14,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Slim Fit Casual Shirt (Teal Blue)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/NOVEMBER/30/LDQ7ALOa_256210adf3d7480fa8eba83f36bdbddf.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 15,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Casual Shirt (Pale Orange)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/NOVEMBER/30/LDQ7ALOa_256210adf3d7480fa8eba83f36bdbddf.jpg",
                    "rating": 3.0,
                    "rating_count": "8",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 16,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Slim Fit Casual Shirt (Magenta Pink)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/NOVEMBER/25/tJduiTdf_a5d0ead2c3324eda9fb805b21feba9cc.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 17,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Casual Shirt (Dark Green)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/8/7z9KBSgj_f80fcc62bb7140eca8ead228dabd3bfe.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 18,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Regular Fit Casual Shirt (Light Yellow)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/8/b2LcCWps_59fd362a6f604bbc9ced883c7ca4daad.jpg",
                    "rating": 2.6,
                    "rating_count": "60",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 19,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Men Cotton Shirts (Mint Green)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/8/b2LcCWps_59fd362a6f604bbc9ced883c7ca4daad.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 20,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Casual Shirt (Sky Blue)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/NOVEMBER/25/zZmUuo2U_a85937c4c5a44287b2ddf966d283d71f.jpg",
                    "rating": 3.0,
                    "rating_count": "8",
                    "price_inr": 525,
                    "original_price_inr": 2499,
                    "discount_percentage": 79
                },
                {
                    "id": 21,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Regular Fit Casual Shirt (Dark Maroon)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/8/uQeuc6hE_f35378ac99af49799d7e31e462018f02.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 22,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Casual Shirt (Solid Black)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/22/1bWN1lfn_8f0befdd11c04e87a2ff6c2accfec8ff.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 23,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Regular Fit Casual Shirt (Sage Green / Beach)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/NOVEMBER/30/PKrYE3uL_be1d4a1ae8804eab9a86a2270ac51f09.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 24,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Slim Fit Casual Shirt (Bright Red)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/22/KEUuddxQ_be00e0f97d01435aaacc99c2137fc492.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 25,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Regular Fit Casual Shirt (Classic Grey)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/8/BBuAJY7e_4352323ba3ed442cb4639b03f471d738.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 26,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Slim Fit Casual Shirt (Slate Grey)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/NOVEMBER/30/dmOXn8Ix_71071c5bcedd443cb2212dedc1d56b4e.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 27,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Regular Fit Casual Shirt (Soft Blue)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/NOVEMBER/30/dmOXn8Ix_71071c5bcedd443cb2212dedc1d56b4e.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 28,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Regular Fit Casual Shirt (Cream / Mandarin Collar)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/29/x6tjLkKD_fe0ac218799c41f38a232d706e75f505.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 29,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Men Shirt (Plum / Dark Magenta)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/NOVEMBER/25/9dCY0swv_41b9ca7792d54f93ac537fa7ee5727b0.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 30,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Regular Fit Casual Shirt (Cyan Blue)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/8/DYBoqXYJ_4ababad29acb47dca157c1641135b4a4.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                },
                {
                    "id": 31,
                    "category": "MenTopWear",
                    "brand": "AMRIT TOP WEAR",
                    "title": "Slim Fit Casual Shirt (Bright Yellow)",
                    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/14/JSynojQo_bc2f9191ba1d47fb94c44d7906d00801.jpg",
                    "rating": 0.0,
                    "rating_count": "0",
                    "price_inr": 498,
                    "original_price_inr": 2499,
                    "discount_percentage": 80
                }
        ])

        const isMensWearList = await MensWear.find();

        if(isMensWearList){
            res.send({
                Message : "Mens Wear List Found",
                Success : true,
                Data : isMensWearList
            });
        }else{
            res.send({
                Message : "Not Found",
                Success : false
            });
        }

    }

    if(MEASURE == "GET_MENSWEARS_LIST"){


        const isMensWearList = await MensWear.find();

        if(isMensWearList){
            res.send({
                Message : "Mens Wear List Found",
                Success : true,
                Data : isMensWearList
            });
        }else{
            res.send({
                Message : "Not Found",
                Success : false
            });
        }

    }
}

module.exports = {
    mensWearRoutesHandler
}