const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const EthnicWear = require("../Model/EthnicWear");

const ethnicWearRoutesHandler = async (req,res) => {

    const MEASURE = req.body.MEASURE;

    if(MEASURE == "CREATE_MULTIPLE_ETHNICWEARS"){

        await EthnicWear.insertMany(
            [
            {
                "id": 1,
                "category": "EthnicWear",
                "brand": "VANSIRI",
                "title": "Printed Pure Cotton Kurti",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MAY/13/P3stDYWp_67e0cac4b8714780899791de7f120f45.jpg",
                "rating": 4.4,
                "rating_count": "669",
                "price_inr": 442,
                "original_price_inr": 1499,
                "discount_percentage": 71
            },
            {
                "id": 2,
                "category": "EthnicWear",
                "brand": "Keitra",
                "title": "Women Printed Kurta with P...",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/AUGUST/19/UNvJJmei_dbe9995abe6a4fa6ab1bf6e9fa3ef064.jpg",
                "rating": 4.5,
                "rating_count": "13.1k",
                "price_inr": 654,
                "original_price_inr": 2999,
                "discount_percentage": 78
            },
            {
                "id": 3,
                "category": "EthnicWear",
                "brand": "Rubans",
                "title": "Gold-Plated Jewellery Set",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2026/APRIL/30/3JauDOCq_c67c25af489849d28f99ef08151761a0.jpg",
                "rating": 4.3,
                "rating_count": "2.4k",
                "price_inr": 475,
                "original_price_inr": 2990,
                "discount_percentage": 84
            },
            {
                "id": 4,
                "category": "EthnicWear",
                "brand": "Anouk",
                "title": "Women Potli Bag",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2026/APRIL/22/pD67aM8m_91a7ac7b89e647d49071415069704881.jpg",
                "rating": 0.0,
                "rating_count": "0",
                "price_inr": 679,
                "original_price_inr": 1999,
                "discount_percentage": 66
            },
            {
                "id": 5,
                "category": "EthnicWear",
                "brand": "Zeraki Jewels",
                "title": "Mangalsutra For Women",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/NOVEMBER/25/YsjBnycm_9f8df771fb614bfa84e0ea6864e75d14.jpg",
                "rating": 4.3,
                "rating_count": "162",
                "price_inr": 461,
                "original_price_inr": 1099,
                "discount_percentage": 58
            },
            {
                "id": 6,
                "category": "EthnicWear",
                "brand": "KALINI",
                "title": "Striped Kurta with Trousers",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/AUGUST/16/jytsy9PZ_d3a69b9b98154d0f814e925eb138a2fb.jpg",
                "rating": 4.3,
                "rating_count": "10.8k",
                "price_inr": 586,
                "original_price_inr": 2463,
                "discount_percentage": 76
            },
            {
                "id": 7,
                "category": "EthnicWear",
                "brand": "SOHI",
                "title": "Silver-Plated Jewellery Set",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/APRIL/21/xvTjdBcK_3b67027961e744df8da9c3caabac8ec5.jpg",
                "rating": 4.0,
                "rating_count": "31",
                "price_inr": 724,
                "original_price_inr": 2897,
                "discount_percentage": 75
            },
            {
                "id": 8,
                "category": "EthnicWear",
                "brand": "Rangriti",
                "title": "Tasselled Border Dupatta",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/32025833/2024/12/20/14810e4c-e0cb-4755-a04f-9b1aa8bb58dd1734679649695LibasWomenFloralEmbroideredRegularThreadWorkKurtawithTrouser1.jpg",
                "rating": 4.3,
                "rating_count": "12",
                "price_inr": 449,
                "original_price_inr": 899,
                "discount_percentage": 50
            },
            {
                "id": 9,
                "category": "EthnicWear",
                "brand": "SURUKH",
                "title": "Women Printed Kurta with P...",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2026/MAY/21/IuGB1rg3_8ae62ef01d6949c2ba3b812c1393da3a.jpg",
                "rating": 4.1,
                "rating_count": "166",
                "price_inr": 818,
                "original_price_inr": 5970,
                "discount_percentage": 86
            },
            {
                "id": 10,
                "category": "EthnicWear",
                "brand": "SALWAR STUDIO",
                "title": "Padded Saree Blouse",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15686576/2022/12/2/a189323b-ecbf-4c50-8b61-b5cc261f010c1669953342112PANASHGold-PlatedRedCrescentShapedChandbalisEarringsPICS000E1.jpg",
                "rating": 4.2,
                "rating_count": "6.7k",
                "price_inr": 785,
                "original_price_inr": 1585,
                "discount_percentage": 50
            },
            {
                "id": 11,
                "category": "EthnicWear",
                "brand": "SALWAR STUDIO",
                "title": "White Sleeveless Crop Top / Blouse",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/AUGUST/19/i7wRJG5c_68df4c02ff5343dc8a132c0198e05c3f.jpg",
                "rating": 0.0,
                "rating_count": "0",
                "price_inr": 430,
                "original_price_inr": 1199,
                "discount_percentage": 64
            },
            {
                "id": 12,
                "category": "EthnicWear",
                "brand": "Anouk",
                "title": "Women Potli Bag (Silver/Beaded)",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2026/JUNE/10/Sno48DE9_6fcaf3c4936349f2acc601229a94e089.jpg",
                "rating": 0.0,
                "rating_count": "0",
                "price_inr": 679,
                "original_price_inr": 1999,
                "discount_percentage": 66
            },
            {
                "id": 13,
                "category": "EthnicWear",
                "brand": "Vishudh",
                "title": "Kurta with Palazzos & Dupatta",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/12/CTgw65zr_a2d8ec1b6454460e825e2f63410376fb.jpg",
                "rating": 4.1,
                "rating_count": "451",
                "price_inr": 753,
                "original_price_inr": 2899,
                "discount_percentage": 74
            },
            {
                "id": 14,
                "category": "EthnicWear",
                "brand": "LeeliPeeri Designer",
                "title": "Printed Unstitched Dress Ma...",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/34138277/2025/7/17/74e77919-7a41-448f-a8ef-6c594828666c1752743837202-Libas-Floral-Printed-Notch-Neck-Kurta-With-Trousers-And-Dupa-1.jpg",
                "rating": 3.8,
                "rating_count": "164",
                "price_inr": 597,
                "original_price_inr": 1348,
                "discount_percentage": 56
            },
            {
                "id": 15,
                "category": "EthnicWear",
                "brand": "Anouk",
                "title": "Padded V Neck Saree Blouse",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/4/KnDDs7Tu_1dc5021ec2bc4f6c834e3d50e0a7e657.jpg",
                "rating": 0.0,
                "rating_count": "0",
                "price_inr": 698,
                "original_price_inr": 3750,
                "discount_percentage": 81
            },
            {
                "id": 16,
                "category": "EthnicWear",
                "brand": "Anouk",
                "title": "Women Potli Bag (Embroidered Pearl)",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/AUGUST/18/tTfFsgK5_db91cb5664fc413691d94d85f9364d7d.jpg",
                "rating": 0.0,
                "rating_count": "0",
                "price_inr": 679,
                "original_price_inr": 1999,
                "discount_percentage": 66
            },
            {
                "id": 17,
                "category": "EthnicWear",
                "brand": "Zeraki Jewels",
                "title": "Mangalsutra For Women (Medium Shot)",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/34101987/2025/7/17/a3a14da7-b033-4aa8-9727-a26da2d701e71752746567107-Gerua-By-Libas-Women-Floral-Embroidered-Gotta-Patti-Kurta-wi-1.jpg",
                "rating": 4.3,
                "rating_count": "31",
                "price_inr": 461,
                "original_price_inr": 1099,
                "discount_percentage": 58
            },
            {
                "id": 18,
                "category": "EthnicWear",
                "brand": "Varanga",
                "title": "Women Woven Design Kurta...",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/1/MKCuOSAZ_47631eb1c5d34fbe98663064e2fd4ca5.jpg",
                "rating": 4.1,
                "rating_count": "9.7k",
                "price_inr": 901,
                "original_price_inr": 5599,
                "discount_percentage": 84
            },
            {
                "id": 19,
                "category": "EthnicWear",
                "brand": "Zeraki Jewels",
                "title": "Mangalsutra For Women (Close Up Profile)",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2026/JANUARY/11/dwRXSGrO_3dd1704c03e546fa972a4eed0a45301e.jpg",
                "rating": 4.3,
                "rating_count": "56",
                "price_inr": 461,
                "original_price_inr": 1099,
                "discount_percentage": 58
            },
            {
                "id": 20,
                "category": "EthnicWear",
                "brand": "SSHAGUN LIFESTYLE",
                "title": "Printed Bandhani Sarees",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/AUGUST/22/ZArm1atu_292a76ce04384b2b941cd8b0178d7941.jpg",
                "rating": 4.6,
                "rating_count": "5",
                "price_inr": 691,
                "original_price_inr": 5999,
                "discount_percentage": 88
            },
            {
                "id": 21,
                "category": "EthnicWear",
                "brand": "SOHI",
                "title": "Silver-Plated Designer Neckl...",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17061276/2022/2/5/23dfbf93-002a-495a-b406-64e0b0fa10781644053544038Pendant1.jpg",
                "rating": 0.0,
                "rating_count": "0",
                "price_inr": 714,
                "original_price_inr": 3573,
                "discount_percentage": 80
            },
            {
                "id": 22,
                "category": "EthnicWear",
                "brand": "Rubans",
                "title": "Gold-Plated Head Jewellery",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2026/MAY/22/kJTcITPu_01506ad5618c45b4a622650fda4e7f35.jpg",
                "rating": 4.6,
                "rating_count": "2.6k",
                "price_inr": 479,
                "original_price_inr": 1600,
                "discount_percentage": 70
            },
            {
                "id": 23,
                "category": "EthnicWear",
                "brand": "TRUVON FASHIONS",
                "title": "Pure Cotton Co-Ord Sets",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/NOVEMBER/9/YPuqJbyB_e7c8c0d2a4dc42e7a53850d416f8b033.jpg",
                "rating": 4.4,
                "rating_count": "1.9k",
                "price_inr": 720,
                "original_price_inr": 2499,
                "discount_percentage": 71
            },
            {
                "id": 24,
                "category": "EthnicWear",
                "brand": "Azira",
                "title": "Printed A-Line Midi Dress",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/32158683/2025/1/6/f4834224-0949-46ff-b8d1-26ee7eb2411e1736162469418-TRAHIMAM-Women-Printed-Regular-Pure-Cotton-Kurta-with-Trouse-1.jpg",
                "rating": 4.2,
                "rating_count": "444",
                "price_inr": 699,
                "original_price_inr": 2199,
                "discount_percentage": 68
            },
            {
                "id": 25,
                "category": "EthnicWear",
                "brand": "eCraftIndia",
                "title": "Bhai Studded Rakhi",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/NOVEMBER/4/4ttLoXO8_bdfbf414f5824d179ab163bf6e8e39bb.jpg",
                "rating": 4.6,
                "rating_count": "3k",
                "price_inr": 59,
                "original_price_inr": 369,
                "discount_percentage": 84
            },
            {
                "id": 26,
                "category": "EthnicWear",
                "brand": "Dore",
                "title": "Rudraksh Thread Rakhi",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/NOVEMBER/26/UHQovZgn_f95182c96f8c4822888bbc489f11f3c1.jpg",
                "rating": 0.0,
                "rating_count": "0",
                "price_inr": 44,
                "original_price_inr": 299,
                "discount_percentage": 85
            },
            {
                "id": 27,
                "category": "EthnicWear",
                "brand": "Voylla",
                "title": "Gold-Plated Ear Cuff Earrings",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2026/MAY/12/8pAxUtix_811b1e96792a487cb47879442048091d.jpg",
                "rating": 4.3,
                "rating_count": "132",
                "price_inr": 293,
                "original_price_inr": 799,
                "discount_percentage": 63
            },
            {
                "id": 28,
                "category": "EthnicWear",
                "brand": "NEBADITA",
                "title": "Woven Design Narayan Peth ...",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2026/APRIL/20/iZF4B4b7_cdf7ed55ae954ba1af544cbcaa57db21.jpg",
                "rating": 0.0,
                "rating_count": "0",
                "price_inr": 595,
                "original_price_inr": 1999,
                "discount_percentage": 70
            },
            {
                "id": 29,
                "category": "EthnicWear",
                "brand": "KALINI",
                "title": "Floral Printed Kurta Set",
                "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/14/uUmZJENy_e76f4f61232f499982760c9f8f799f7c.jpg",
                "rating": 4.2,
                "rating_count": "11.9k",
                "price_inr": 949,
                "original_price_inr": 4999,
                "discount_percentage": 81
            }
            ]
        );

        const isEthnicWearList = await EthnicWear.find();

        if(isEthnicWearList){
            res.send({
                Message : "Ethnic Wear List Found",
                Success : true,
                Data : isEthnicWearList
            });
        }else{
            res.send({
                Message : "Not Found",
                Success : false
            });
        }

    }

    if(MEASURE == "GET_ETHNICWEARS_LIST"){

        const isEthnicWearList = await EthnicWear.find();

        if(isEthnicWearList){
            res.send({
                Message : "Ethnic Wear List Found",
                Success : true,
                Data : isEthnicWearList
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
    ethnicWearRoutesHandler
}