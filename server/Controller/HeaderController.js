const MenSchema = require("../Model/Men");
const WomenSchema = require("../Model/Women");
const KidsSchema = require("../Model/Kids");
const HomeSchema = require("../Model/Home");
const BeautySchema = require("../Model/Beauty");
const GenZSchema = require("../Model/Genz");

const HeaderRoutesHandler = async (req, res) => {

    const MEASURE = req.body.MEASURE;

    if(MEASURE == "CREATE_RECORDS_INTO_MEN"){

        await MenSchema.create({
            Topwear : ["T-Shirts","Casual Shirts","Formal Shirts","Sweatshirts","Sweaters","Jackets","Blazers & Coats","Suits","Rain Jackets"],
            Indian_Festive_Wear : ["Kurtas & Kurta Sets","Sherwanis","Nehru Jackets","Dhotis"],
            Bottomwear : ["Jeans","Casual Trousers","Formal Trousers","Shorts","Track Pants & Joggers"],
            Innerwear_Sleepwear : ["Briefs & Trunks","Boxers","Vests","Sleepwear & Loungewear","Thermals"],
            Plus_Size : [],
            Footwear : ["Casual Shoes","Sports Shoes","Formal Shoes","Sneakers","Sandals & Floaters","Flip Flops","Socks"],
            Personal_Care_Grooming : [],
            Sunglasses_Frames : [],
            Watches : [],
            Sports_Active_Wear : [ "Sports Shoes","Sports Sandals","Active T-Shirts","Track Pants & Shorts","Tracksuits","Jackets & Sweatshirts","Sports Accessories","Swimwear"],
            Gadgets : ["Smart Wearables","Fitness Gadgets","Headphones","Speakers"],
            Fashion_Accessories : ["Wallets","Belts","Perfumes & Body Mists","Trimmers","Deodorants","Ties, Cufflinks & Pocket","Squares","Accessory Gift Sets","Caps & Hats","Mufflers, Scarves & Gloves","Phone Cases","Rings & Wristwear","Helmets"],
            Bags_Backpacks : [],
            Luggages_Trolleys : []
        });

        const isMenList = await MenSchema.find();

        if(isMenList){
            res.send({
                Message : "Mens Categories in Header",
                Success : true,
                Data : isMenList
            });
        }else{
            res.send({
                Message : "NOT Found",
                Success : false
            });
        }

    }

    if(MEASURE == "GET_MENS_DETAILS_FROM_HEADER"){

        const isMenList = await MenSchema.find();

        if(isMenList){
            res.send({
                Message : "Mens Categories in Header",
                Success : true,
                Data : isMenList
            });
        }else{
            res.send({
                Message : "NOT Found",
                Success : false
            });
        }

    }

    if(MEASURE == "CREATE_RECORDS_INTO_WOMEN"){

        await WomenSchema.create({
            Indian_Fusion_Wear : ["Kurtas & Suits","Kurtis, Tunics & Tops","Sarees","Ethnic Wear","Leggings, Salwars & Churidars","Skirts & Palazzos","Dress Materials","Lehenga Cholis","Dupattas & Shawls","Jackets"],
            Belts_Scarves_More : [],
            Watches_Wearables : [],
            Western_Wear : ["Dresses","Tops","Tshirts","Jeans","Trousers & Capris","Shorts & Skirts","Co-ords","Playsuits","Jumpsuits","Shrugs","Sweaters & Sweatshirts","Jackets & Coats","Blazers & Waistcoats"],
            Plus_Size : [],
            Maternity : [],
            Sunglasses_Frames : [],
            Footwear : ["Flats","Casual Shoes","Heels","Boots","Sports Shoes & Floaters"],
            Sports_Active_Wear : ["Clothing","Footwear","Sports Accessories","Sports Equipment"],
            Lingerie_Sleepwear : ["Bra","Briefs","Shapewear","Sleepwear & Loungewear","Swimwear","Camisoles & Thermals"],
            Beauty_Personal_Care : ["Makeup","Skincare","Premium Beauty","Lipsticks","Fragrances"],
            Gadgets : ["Smart Wearables","Fitness Gadgets","Headphones","Speakers"],
            Jewellery : ["Fashion Jewellery","Fine Jewellery","Earrings"],
            Backpacks : [],
            Handbags_Bags_Wallets : [],
            Luggages_Trolleys : [],
        });

        const isWomenList = await WomenSchema.find();

        if(isWomenList){
            res.send({
                Message : "WoMens Categories in Header",
                Success : true,
                Data : isWomenList
            });
        }else{
            res.send({
                Message : "NOT Found",
                Success : false
            });
        }

    }

    if(MEASURE == "GET_WOMENS_DETAILS_FROM_HEADER"){

      const isWomenList = await WomenSchema.find();

        if(isWomenList){
            res.send({
                Message : "WoMens Categories in Header",
                Success : true,
                Data : isWomenList
            });
        }else{
            res.send({
                Message : "NOT Found",
                Success : false
            });
        }

    }

    if(MEASURE == "CREATE_RECORDS_INTO_KIDS"){
        
        await KidsSchema.create({
            Boys_Clothing : ["T-Shirts","Shirts","Shorts","Jeans","Trousers","Clothing Sets","Ethnic Wear","Track Pants & Pyjamas","Jacket, Sweater & Sweatshirts","Party Wear","Innerwear & Thermals","Nightwear & Loungewear","Value Packs"],
            Girls_Clothing : ["Dresses","Tops","Tshirts","Clothing Sets","Lehenga choli","Kurta Sets","Party wear","Dungarees & Jumpsuits","Skirts & shorts","Tights & Leggings","Jeans, Trousers & Capris","Jacket, Sweater & Sweatshirts","Innerwear & Thermals","Nightwear & Loungewear","Value Packs"],
            Footwear : ["Casual Shoes","Flipflops","Sports Shoes","Flats","Sandals","Heels","School Shoes","Socks"],
            Toys_Games : ["Learning & Development","Activity Toys","Soft Toys","Action Figure / Play set"],
            Infants : ["Bodysuits","Rompers & Sleepsuits","Clothing Sets","Tshirts & Tops","Dresses","Bottom wear","Winter Wear","Innerwear & Sleepwear","Infant Care"],
            Home_Bath : [],
            Personal_Care : [],
            Kids_Accessories : ["Bags & Backpacks","Watches","Jewellery & Hair accessory","Sunglasses","Masks & Protective Gears","Caps & Hats"],
            Brands : ["H&M","Max Kids","Pantaloons","United Colors Of Benetton Kids","YK","U.S. Polo Assn. Kids","Mothercare","HRX"],
        })

        const isKidsList = await KidsSchema.find();

        if(isKidsList){
            res.send({
                Message : "KIDS List Found",
                Success : true,
                Data : isKidsList
            });
        }else{
            res.send({
                Message : "Not Found",
                Success : false
            });
        }

    }

    if(MEASURE == "GET_KIDS_DETAILS_FROM_HEADER"){

        const isKidsList = await KidsSchema.find();

        if(isKidsList){
            res.send({
                Message : "KIDS List Found",
                Success : true,
                Data : isKidsList
            });
        }else{
            res.send({
                Message : "Not Found",
                Success : false
            });
        }

    }

    if(MEASURE == "CREATE_RECORDS_INTO_HOME"){

        await HomeSchema.create({
            Bed_Linen_Furnishing : ["Bed Runners","Mattress Protectors","Bedsheets","Bedding Sets","Blankets, Quilts & Dohars","Pillows & Pillow Covers","Bed Covers","Diwan Sets","Chair Pads & Covers","Sofa Covers"],
            Flooring : ["Floor Runners","Carpets","Floor Mats & Dhurries","Door Mats"],
            Bath : ["Bath Towels","Hand & Face Towels","Beach Towels","Towels Set","Bath Rugs","Bath Robes","Bathroom Accessories","Shower Curtains"],
            Lamps_Lighting : ["Floor Lamps","Ceiling Lamps","Table Lamps","Wall Lamps","Outdoor Lamps","String Lights"],
            Home_Décor : ["Plants & Planters","Aromas & Candles","Clocks","Mirrors","Wall Décor","Festive Decor","Pooja Essentials","Wall Shelves","Fountains","Showpieces & Vases","Ottoman"],
            Cushions_Cushion_Covers : [],
            Curtains : [],
            Furniture : [],
            Home_Gift_Sets : [],
            Kitchen_Table : ["Table Runners","Dinnerware & Serveware","Cups and Mugs","Bakeware & Cookware","Kitchen Storage & Tools","Bar & Drinkware","Table Covers & Furnishings"],
            Storage : ["Bins","Hangers","Organisers","Hooks & Holders","Laundry Bags"]
        });

        const isHomeList = await HomeSchema.find();

        if(isHomeList){
            res.send({
                Message : "Home Categories List Found",
                Success : true,
                Data : isHomeList
            });
        }else{
            res.send({
                Message : "Not Found",
                Success : false
            });
        }

    }

    if(MEASURE == "GET_HOME_DETAILS_FROM_HEADER"){

        const isHomeList = await HomeSchema.find();

        if(isHomeList){
            res.send({
                Message : "Home Categories List Found",
                Success : true,
                Data : isHomeList
            });
        }else{
            res.send({
                Message : "Not Found",
                Success : false
            });
        }

    }

    if(MEASURE == "CREATE_RECORDS_INTO_BEAUTY"){

        await BeautySchema.create({
            Makeup : ["Lipstick","Lip Gloss","Lip Liner","Mascara","Eyeliner","Kajal","Eyeshadow","Foundation","Primer","Concealer","Compact","Nail Polish"],
            Skincare_Bath_Body : ["Skincare, Bath & Body","Face Moisturiser","Cleanser","Masks & Peel","Sunscreen","Serum","Face Wash","Eye Cream","Lip Balm","Body Lotion","Body Wash","Body Scrub","Hand Cream"],
            Baby_Care : [],
            Masks : [],
            Haircare : ["Shampoo","Conditioner","Hair Cream","Hair Oil","Hair Gel","Hair Color","Hair Serum","Hair Accessory"],
            Fragrances : ["Perfume","Deodorant","Body Mist"],
            Appliances : ["Hair Straightener","Hair Dryer","Epilator"],
            Men_Grooming : ["Trimmers","Beard Oil","Hair Wax"],
            Beauty_Gift_Makeup_Set : ["Beauty Gift","Makeup Kit"],
            Premium_Beauty : [],
            Wellness_Hygiene : [],
            Top_Brands : ["Lakme","Maybelline","LOreal","Philips","Bath & Body Works","THE BODY SHOP","Biotique","Mamaearth","MCaffeine","Nivea","Lotus Herbals","LOreal Professionnel","KAMA AYURVEDA","M.A.C","Forest Essentials"]
        });

        const isBeautyList= await BeautySchema.find();

        if(isBeautyList){
            res.send({
                Message : "Beauty Categories List Found",
                Success : true,
                Data : isBeautyList
            });
        }else{
            res.send({
                Message : "Not Found",
                Success : false
            });
        }

    }

    if(MEASURE == "GET_BEAUTY_DETAILS_FROM_HEADER"){

        const isBeautyList= await BeautySchema.find();

        if(isBeautyList){
            res.send({
                Message : "Beauty Categories List Found",
                Success : true,
                Data : isBeautyList
            });
        }else{
            res.send({
                Message : "Not Found",
                Success : false
            });
        }

    }

    if(MEASURE == "CREATE_RECORDS_INTO_GENZ"){

        await GenZSchema.create({
            Women_Western_Wear : ["Dresses Under ₹599","Tops Under ₹399","Jeans Under ₹599","Trousers Under ₹699","T-shirts Under ₹299","Shirts Under ₹499","Skirts Under ₹499","Shorts Under ₹699","Co-ords Under ₹799","Jumpsuits Under ₹899","Track pants Under ₹699","Jackets Under ₹899","Sweatshirts Under ₹699","Sweaters Under ₹899"],
            Women_Ethnic_Wear : ["Kurtas Under ₹399","Kurtis Under ₹499","Kurta sets Under ₹499","Ethnic Dresses Under ₹999","Palazzos Under ₹799"],
            Lingerie_Loungewear : ["Bras Under ₹399","Night suits Under ₹799","Nightdresses Under ₹999","Lounge pants Under ₹999","Briefs Under ₹599"],
            Men_Casual_Wear : ["T-shirts Under ₹299","Shirts Under ₹499","Jeans Under ₹599","Trousers Under ₹699","Shorts Under ₹599","Track pants Under ₹699","Jackets Under ₹899","Sweatshirts Under ₹699","Sweaters Under ₹999","Co-ords Under ₹999"],
            Men_Occassion_Wear : ["Kurtas Under ₹799","Kurta Sets Under ₹999"],
            Women_Footwear : ["Heels Under ₹599","Flats Under ₹499","Casual shoes Under ₹699","Sports shoes Under ₹999","Flip flops Under ₹799","Boots Under ₹999","Ballerinas Under ₹799"],
            Men_Footwear : ["Casual shoes Under ₹799","Sports shoes Under ₹999","Formal shoes Under ₹999","Sandals Under ₹799","Flip flops Under ₹499","Boots Under ₹999"],
            Beauty_Grooming : ["Skincare Under ₹299","Haircare Under ₹399","Bath & Body Under ₹399","MakeUp Under ₹299","Fragrances Under ₹399","Appliances Under ₹999"],
            Accessories : ["Jewellery Under ₹299","Handbags Under ₹499","Clutches Under ₹999","Backpacks Under ₹699","Wallets Under ₹499","Sunglasses Under ₹699","Belts Under ₹799","Caps Under ₹899"],
        });

        const isGenzList = await GenZSchema.find();

        if(isGenzList){
            res.send({
                Message : "GenZ Categories List Found",
                Success : true,
                Data : isGenzList
            });
        }else{
            res.send({
                Message : "Not Found",
                Success : false
            });
        }

    }

    if(MEASURE == "GET_GENZ_DETAILS_FROM_HEADER"){

        const isGenzList = await GenZSchema.find();

        if(isGenzList){
            res.send({
                Message : "GenZ Categories List Found",
                Success : true,
                Data : isGenzList
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
    HeaderRoutesHandler
}