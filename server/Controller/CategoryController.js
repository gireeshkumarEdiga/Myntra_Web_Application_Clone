const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Categories = require("../Model/Categories");

const categoryRoutesHandler = async (req,res) => {

    const MEASURE = req.body.MEASURE;

    if(MEASURE == "MULTIPLE_CATEGORIES"){

        await Categories.insertMany([
            { id: 1, category: "Ethnic Wear", discount: "50-80% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/Fc0Z9M5i_ea2a6758d2424e57aaf8cd736c46e34e.jpg" },
            { id: 2, category: "Casual Wear", discount: "40-80% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/iyyFMAJp_7fc999e8de27463e949f490093941d27.jpg" },
            { id: 3, category: "Men's Activewear", discount: "30-70% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/nCp2j5wC_c61ec2e9853f43d8b71832ddc17da0ca.jpg" },
            { id: 4, category: "Women's Activewear", discount: "30-70% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/fi1d63dA_2284b1835f064024a3da9cf56c786282.jpg" },
            { id: 5, category: "Western Wear", discount: "40-80% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/EFognMkN_e34a6f619c9047618306b75d01ddcfa2.jpg" },
            { id: 6, category: "Sportswear", discount: "30-80% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/kdvCX8xv_0d02c56457964e0abfbd32924e8aa718.jpg" },
            
            { id: 7, category: "Loungewear", discount: "30-60% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/1ngoZUwL_777c61f853e54f538a9d03fa248762d6.jpg" },
            { id: 8, category: "Innerwear", discount: "UP TO 70% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/6R39qjqC_1e3a146e6a0a45648652f15054637617.jpg" },
            { id: 9, category: "Lingerie", discount: "UP TO 70% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/RXzUYrpc_1eb13a3cfde94eeca575fc0282757b00.jpg" },
            { id: 10, category: "Watches", discount: "UP TO 80% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/6kDkAgm9_5f49da02d50349198070a5797c812d60.jpg" },
            { id: 11, category: "Grooming", discount: "UP TO 60% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/a3KlrIpC_0c066ae013084d5c87014c15cb658869.jpg" },
            { id: 12, category: "Beauty & Makeup", discount: "UP TO 60% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/Xi9QN5rl_1778f93e9d074b0aab90594f8993f4da.jpg" },
            
            { id: 13, category: "Kids Wear", discount: "50-70% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/tX6N20cu_73e805b92c2d4f7e94e4bf463c3c1f34.jpg" },
            { id: 14, category: "Men's Footwear", discount: "50-70% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/j8x5OuKi_1c3c44fdd12f46f5be4829489b795786.jpg" },
            { id: 15, category: "Women's Footwear", discount: "40-80% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/jn3gZrrO_0e6f0a99f3a74891ae79fa67f35ab1b1.jpg" },
            { id: 16, category: "Bags, Belts & Wallets", discount: "40-70% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/cJI4ibMD_410c037d17ef4d1e9de0c08864ecc1c5.jpg" },
            { id: 17, category: "Office Wear", discount: "40-70% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/C308qm35_3faa9d7b797d4e21ab5a44aecb2f485b.jpg" },
            { id: 18, category: "Men's Ethnic Wear", discount: "UP TO 60% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/krIoyDvA_fcef47bd12104260b2cf0c34ba1de4f0.jpg" },

            { id: 19, category: "Home Decor", discount: "40-70% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/kig7kGbS_1c2ae2fc85014eb9bf4a1e84b8a5e740.jpg" },
            { id: 20, category: "Handbags", discount: "40-80% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/GsTJeuB3_79a3d57a10274dbb927613efce83871d.jpg" },
            { id: 21, category: "Headphones & Speakers", discount: "UP TO 70% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/0iCB4lrO_0d7395849e3042389b4afe3444303480.jpg" },
            { id: 22, category: "Jewellery", discount: "UP TO 80% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/bbJJvSXj_4e1b9b1606654c608339f2f28ff23f8b.jpg" },
            { id: 23, category: "Size-Inclusive Styles", discount: "UP TO 60% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/nr4lwVzi_ad6269553bf74b8f9ba2a69141107677.jpg" },
            { id: 24, category: "Inclusive Styles", discount: "UP TO 80% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/HHrk8hwG_ee05bb967e17450091385fa330dc58be.jpg" },


            { id: 24, category: "Watches & Wearables", discount: "UP TO 80% OFF", image: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/HHrk8hwG_ee05bb967e17450091385fa330dc58be.jpg" },
            { id: 25, category: "Sleepwear", discount: "30-70% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/lk5IOHJX_dc662194fb9542d6908e9a8f0b15bfae.jpg" },
            { id: 26, category: "Workwear", discount: "40-70% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/GVBYuu89_e6b19c30d44e4eb4b7a9639a0e776f35.jpg" },
            { id: 27, category: "Eyewear", discount: "UP TO 80% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/GVBYuu89_e6b19c30d44e4eb4b7a9639a0e776f35.jpg" },
            { id: 26, category: "Workwear", discount: "40-80% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/GVBYuu89_e6b19c30d44e4eb4b7a9639a0e776f35.jpg" },
            { id: 28, category: "Casual Styles", discount: "40-80% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/1IzaqDSV_92c8ad71a280492db849aaeb925c49ea.jpg" },

            { id: 29, category: "Bags & Backpacks", discount: "30-80% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/ug3U0cfI_51bd6beafb57489d8f2109c81cd201f0.jpg" },
            { id: 30, category: "Trolleys & Luggage Bags", discount: "30-70% OFF", image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/kiUPSoJq_9f2690bb962943c0aff5c2ad175ae977.jpg" },
            { id: 31, category: "Flip-Flops", discount: "30-70% OFF", image: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/30/LMrfMAfK_1aff7501b72344399da37c25e7da66dd.jpg"}
        ]);

        const isCategories = await Categories.find();

        if(isCategories){
            res.send({
                Message : "Categories List",
                Success : true,
                Data : isCategories
            })
        }else{
            res.send({
                Message : "Not Found",
                Success : false
            });
        }

    }

    if(MEASURE == "GET_CATEGORY_LIST"){

        const isCategories = await Categories.find();

        if(isCategories){
            res.send({
                Message : "Categories List",
                Success : true,
                Data : isCategories
            })
        }else{
            res.send({
                Message : "Not Found",
                Success : false
            });
        }

    }

}

module.exports = {
    categoryRoutesHandler
}