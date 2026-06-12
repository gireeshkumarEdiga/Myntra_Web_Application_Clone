import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MENComp from "./MENComp";
import WOMENComp from "./WOMENComp";
import KIDSComp from "./KIDSComp";
import HOMEComp from "./HOMEComp";
import BEAUTYComp from "./BEAUTYComp";
import GENZComp from "./GENZComp";

const Header = () => {

    const [activeMenu, setActiveMenu] = useState("");

    // const [MEN, SETMEN] = useState([{
    //     color: "#ee5f73",
    //     columns: [
    //             {
    //                 title: "Topwear",
    //                 items: [
    //                     "T-Shirts",
    //                     "Casual Shirts",
    //                     "Formal Shirts",
    //                     "Sweatshirts",
    //                     "Sweaters",
    //                     "Jackets",
    //                     "Blazers & Coats",
    //                     "Suits",
    //                     "Rain Jackets"
    //                 ],
    //             },
    //             {
    //                 title2: "Indian & Festive Wear",
    //                 items2: [
    //                     "Kurtas & Kurta Sets",
    //                     "Sherwanis",
    //                     "Nehru Jackets",
    //                     "Dhotis"
    //                 ]
    //             },
    //             {
    //                 title3: "Bottomwear",
    //                 items3: [
    //                     "Jeans",
    //                     "Casual Trousers",
    //                     "Formal Trousers",
    //                     "Shorts",
    //                     "Track Pants & Joggers"
    //                 ],
    //             },
    //             {
    //                 title4: "Innerwear & Sleepwear",
    //                 items4: [
    //                     "Briefs & Trunks",
    //                     "Boxers",
    //                     "Vests",
    //                     "Sleepwear & Loungewear",
    //                     "Thermals"
    //                 ],
    //             },
    //             {
    //                 title5: "Plus Size",
    //                 items5: []
    //             },
    //             {
    //                 title6: "Footwear",
    //                 items6: [
    //                     "Casual Shoes",
    //                     "Sports Shoes",
    //                     "Formal Shoes",
    //                     "Sneakers",
    //                     "Sandals & Floaters",
    //                     "Flip Flops",
    //                     "Socks"
    //                 ],
    //             },
    //             {
    //                 title7: "Personal Care & Grooming",
    //                 items7: [],
    //             },
    //             {
    //                 title8: "Sunglasses & Frames",
    //                 items8: [],
    //             },
    //             {
    //                 title9: "Watches",
    //                 items9: []
    //             },
    //             {
    //                 title10: "Sports & Active Wear",
    //                 items10: [
    //                     "Sports Shoes",
    //                     "Sports Sandals",
    //                     "Active T-Shirts",
    //                     "Track Pants & Shorts",
    //                     "Tracksuits",
    //                     "Jackets & Sweatshirts",
    //                     "Sports Accessories",
    //                     "Swimwear"
    //                 ]
    //             },
    //             {
    //                 title11: "Gadgets",
    //                 items11: [
    //                     "Smart Wearables",
    //                     "Fitness Gadgets",
    //                     "Headphones",
    //                     "Speakers"
    //                 ]
    //             },
    //             {
    //                 title12: "Fashion Accessories",
    //                 items12: [
    //                     "Wallets",
    //                     "Belts",
    //                     "Perfumes & Body Mists",
    //                     "Trimmers",
    //                     "Deodorants",
    //                     "Ties, Cufflinks & Pocket",
    //                     "Squares",
    //                     "Accessory Gift Sets",
    //                     "Caps & Hats",
    //                     "Mufflers, Scarves & Gloves",
    //                     "Phone Cases",
    //                     "Rings & Wristwear",
    //                     "Helmets"
    //                 ]
    //             },
    //             {
    //                 title13: "Bags & Backpacks",
    //                 items13: [],
    //             },
    //             {
    //                 title14: "Luggages & Trolleys",
    //                 items14: []
    //             }
    //     ]
    // }]);

    // const [WOMEN, SETWOMEN] = useState([{
    //     color: "#fb56c1",
    //     columns: [
    //         {
    //             title: "Indian & Fusion Wear",
    //             items: [
    //                 "Kurtas & Suits",
    //                 "Kurtis, Tunics & Tops",
    //                 "Sarees",
    //                 "Ethnic Wear",
    //                 "Leggings, Salwars & Churidars",
    //                 "Skirts & Palazzos",
    //                 "Dress Materials",
    //                 "Lehenga Cholis",
    //                 "Dupattas & Shawls",
    //                 "Jackets"
    //             ],
    //         },
    //         {
    //             title2: "Belts, Scarves & More",
    //             items2: [],
    //         },
    //         {
    //             title3: "Watches & Wearables",
    //             items3: []
    //         },
    //         {
    //             title4: "Western Wear",
    //             items4: [
    //                 "Dresses",
    //                 "Tops",
    //                 "Tshirts",
    //                 "Jeans",
    //                 "Trousers & Capris",
    //                 "Shorts & Skirts",
    //                 "Co-ords",
    //                 "Playsuits",
    //                 "Jumpsuits",
    //                 "Shrugs",
    //                 "Sweaters & Sweatshirts",
    //                 "Jackets & Coats",
    //                 "Blazers & Waistcoats"
    //             ],
    //         },
    //         {
    //             title5: "Plus Size",
    //             items5: []
    //         },
    //         {
    //             title6: "Maternity",
    //             items6: [],
    //         },
    //         {
    //             title7: "Sunglasses & Frames",
    //             items7: [],
    //         },{
    //             title8: "Footwear",
    //             items8: [
    //                 "Flats",
    //                 "Casual Shoes",
    //                 "Heels",
    //                 "Boots",
    //                 "Sports Shoes & Floaters"
    //             ],
    //         },{
    //             title9: "Sports & Active Wear",
    //             items9: [
    //                 "Clothing",
    //                 "Footwear",
    //                 "Sports Accessories",
    //                 "Sports Equipment"
    //             ]
    //         },
    //         {
    //             title10: "Lingerie & Sleepwear",
    //             items10: [
    //                 "Bra",
    //                 "Briefs",
    //                 "Shapewear",
    //                 "Sleepwear & Loungewear",
    //                 "Swimwear",
    //                 "Camisoles & Thermals"
    //             ],
    //         },
    //         {
    //             title11: "Beauty & Personal Care",
    //             items11: [
    //                 "Makeup",
    //                 "Skincare",
    //                 "Premium Beauty",
    //                 "Lipsticks",
    //                 "Fragrances"
    //             ]
    //         },
    //         {
    //             title12: "Gadgets",
    //             items12: [
    //                 "Smart Wearables",
    //                 "Fitness Gadgets",
    //                 "Headphones",
    //                 "Speakers"
    //             ],
    //         },
    //         {
    //             title13: "Jewellery",
    //             items13: [
    //                 "Fashion Jewellery",
    //                 "Fine Jewellery",
    //                 "Earrings"
    //             ],
    //         },
    //         {
    //             title14: "Backpacks",
    //             items14: [],
    //         },{
    //             title15: "Handbags, Bags & Wallets",
    //             items15: [],
    //         },
    //         {
    //             title16: "Luggages & Trolleys",
    //             items16: []
    //         }
    //         ]
    // }])

    // const [KIDS, SETKIDS] = useState([{
    //     color: "#f26a10",
    //     columns: [
    //         {
    //             title: "Boys Clothing",
    //             items: [
    //                 "T-Shirts",
    //                 "Shirts",
    //                 "Shorts",
    //                 "Jeans",
    //                 "Trousers",
    //                 "Clothing Sets",
    //                 "Ethnic Wear",
    //                 "Track Pants & Pyjamas",
    //                 "Jacket, Sweater & Sweatshirts",
    //                 "Party Wear",
    //                 "Innerwear & Thermals",
    //                 "Nightwear & Loungewear",
    //                 "Value Packs"
    //             ]
    //         },
    //         {
    //             title2: "Girls Clothing",
    //             items2: [
    //                 "Dresses",
    //                 "Tops",
    //                 "Tshirts",
    //                 "Clothing Sets",
    //                 "Lehenga Choli",
    //                 "Kurta Sets",
    //                 "Party Wear",
    //                 "Dungarees & Jumpsuits",
    //                 "Skirts & Shorts",
    //                 "Tights & Leggings",
    //                 "Jeans, Trousers & Capris",
    //                 "Jacket, Sweater & Sweatshirts",
    //                 "Innerwear & Thermals",
    //                 "Nightwear & Loungewear",
    //                 "Value Packs"
    //             ]
    //         },
    //         {
    //             title3: "Footwear",
    //             items3: [
    //                 "Casual Shoes",
    //                 "Flipflops",
    //                 "Sports Shoes",
    //                 "Flats",
    //                 "Sandals",
    //                 "Heels",
    //                 "School Shoes",
    //                 "Socks"
    //             ],
    //         },
    //         {
    //             title4: "Toys & Games",
    //             items4: [
    //                 "Learning & Development",
    //                 "Activity Toys",
    //                 "Soft Toys",
    //                 "Action Figure / Play set"
    //             ],
    //         },
    //         {
    //             title5 : "Infrants",
    //             items5 : [
    //                 "Bodysuits",
    //                 "Rompers & Sleepsuits",
    //                 "Clothing Sets",
    //                 "Tshirts & Tops",
    //                 "Dresses",
    //                 "Bottom wear",
    //                 "Winter Wear",
    //                 "Innerwear & Sleepwear",
    //                 "Infant Care",
    //             ]
    //         },
    //         {
    //             title6 : "Kids & Accessories",
    //             items6 : [
    //                 "Bags & Backpacks",
    //                 "Watches",
    //                 "Jewellery & Hair accessory",
    //                 "Sunglasses",
    //                 "Masks & Protective Gears",
    //                 "Caps & Hats",
    //             ]
    //         },
    //         {
    //             title7 : "Brands",
    //             items7 : [
    //                 "H&M",
    //                 "Max Kids",
    //                 "Pantaloons",
    //                 "United Colors Of Benetton Kids",
    //                 "YK",
    //                 "U.S. Polo Assn. Kids",
    //                 "Mothercare",
    //                 "HRX",
    //             ]
    //         }
    //     ]
    // }])

    // const [HOME, SETHOME] = useState([{
    //     color: "#f2c210",
    //     columns: [
    //         {
    //             title: "Bed Linen & Furnishing",
    //             items: [
    //                 "Bed Runners",
    //                 "Mattress Protectors",
    //                 "Bedsheets",
    //                 "Bedding Sets",
    //                 "Blankets, Quilts & Dohars",
    //                 "Pillows & Pillow Covers",
    //                 "Bed Covers",
    //                 "Diwan Sets",
    //                 "Chair Pads & Covers",
    //                 "Sofa Covers"
    //             ],
    //         },
    //         {
    //             title2: "Flooring",
    //             items2: [
    //                 "Floor Runners",
    //                 "Carpets",
    //                 "Floor Mats & Dhurries",
    //                 "Door Mats"
    //             ]
    //         },
    //         {
    //             title3: "Bath",
    //             items3: [
    //                 "Bath Towels",
    //                 "Hand & Face Towels",
    //                 "Beach Towels",
    //                 "Towels Set",
    //                 "Bath Rugs",
    //                 "Bath Robes",
    //                 "Bathroom Accessories",
    //                 "Shower Curtains"
    //             ],
    //         },
    //         {
    //             title4: "Lamps & Lighting",
    //             items4: [
    //                 "Floor Lamps",
    //                 "Ceiling Lamps",
    //                 "Table Lamps",
    //                 "Wall Lamps",
    //                 "Outdoor Lamps",
    //                 "String Lights"
    //             ]
    //         },

    //         {
    //             title5: "Home Décor",
    //             items5: [
    //                 "Plants & Planters",
    //                 "Aromas & Candles",
    //                 "Clocks",
    //                 "Mirrors",
    //                 "Wall Décor",
    //                 "Festive Decor",
    //                 "Pooja Essentials",
    //                 "Wall Shelves",
    //                 "Fountains",
    //                 "Showpieces & Vases",
    //                 "Ottoman"
    //             ],
    //         },
    //         {
    //             title6: "Cushions & Cushion Covers",
    //             items6: [],
    //         },
    //         {
    //             title7: "Curtains",
    //             items7: []
    //         },
    //         {
    //             title8: "Furniture",
    //             item8: [],
    //         },
    //         {
    //             title9: "Home Gift Sets",
    //             items9: [],
    //         },
    //         {
    //             title10: "Kitchen & Table",
    //             items10: [
    //                 "Table Runners",
    //                 "Dinnerware & Serveware",
    //                 "Cups and Mugs",
    //                 "Bakeware & Cookware",
    //                 "Kitchen Storage & Tools",
    //                 "Bar & Drinkware",
    //                 "Table Covers & Furnishings"
    //             ]
    //         },
    //         {
    //             title11: "Storage",
    //             items11: [
    //                 "Bins",
    //                 "Hangers",
    //                 "Organisers",
    //                 "Hooks & Holders",
    //                 "Laundry Bags"
    //             ]
    //         }
    //     ]
    // }])

    // const [BEAUTY, SETBEAUTY] = useState([{
    //     color: "#0db7af",
    //     columns: [
    //         {
    //             title: "Makeup",
    //             items: [
    //                 "Lipstick",
    //                 "Lip Gloss",
    //                 "Lip Liner",
    //                 "Mascara",
    //                 "Eyeliner",
    //                 "Kajal",
    //                 "Eyeshadow",
    //                 "Foundation",
    //                 "Primer",
    //                 "Concealer",
    //                 "Compact",
    //                 "Nail Polish"
    //             ]
    //         },
    //         {
    //             title2: "Skincare, Bath & Body",
    //             items2: [
    //                 "Face Moisturiser",
    //                 "Cleanser",
    //                 "Masks & Peel",
    //                 "Sunscreen",
    //                 "Serum",
    //                 "Face Wash",
    //                 "Eye Cream",
    //                 "Lip Balm",
    //                 "Body Lotion",
    //                 "Body Wash",
    //                 "Body Scrub",
    //                 "Hand Cream"
    //             ],
    //         },
    //         {
    //             title3: "Baby Care",
    //             items3: [],
    //         },
    //         {
    //             title4: "Masks",
    //             items4: []
    //         },
    //         {
    //             title5: "Haircare",
    //             items5: [
    //                 "Shampoo",
    //                 "Conditioner",
    //                 "Hair Cream",
    //                 "Hair Oil",
    //                 "Hair Gel",
    //                 "Hair Color",
    //                 "Hair Serum",
    //                 "Hair Accessory"
    //             ],
    //         },
    //         {
    //             title6: "Fragrances",
    //             items6: [
    //                 "Perfume",
    //                 "Deodorant",
    //                 "Body Mist"
    //             ]
    //         },
    //         {
    //             title7: "Appliances",
    //             item7: [
    //                 "Hair Straightener",
    //                 "Hair Dryer",
    //                 "Epilator"
    //             ],
    //         },
    //         {
    //             title8: "Men's Grooming",
    //             items8: [
    //                 "Trimmers",
    //                 "Beard Oil",
    //                 "Hair Wax"
    //             ],
    //         },
    //         {
    //             title9: "Beauty Gift & Makeup Set",
    //             items9: [
    //                 "Beauty Gift",
    //                 "Makeup Kit"
    //             ],
    //         },
    //         {
    //             title10: "Premium Beauty",
    //             items10: [],
    //         },
    //         {
    //             title11: "Wellness & Hygiene",
    //             items11: []
    //         },
    //         {
    //             title12: "Top Brands",
    //             items12: [
    //                 "Lakme",
    //                 "Maybelline",
    //                 "LOreal",
    //                 "Philips",
    //                 "Bath & Body Works",
    //                 "THE BODY SHOP",
    //                 "Biotique",
    //                 "Mamaearth",
    //                 "MCaffeine",
    //                 "Nivea",
    //                 "Lotus Herbals",
    //                 "LOreal Professionnel",
    //                 "KAMA AYURVEDA",
    //                 "M.A.C",
    //                 "Forest Essentials"
    //             ]
    //         }
    //     ]
    // }])

    // const [GENZ, SETGENZ] = useState([{
    //     color: "#0db7af",
    //     columns: [
    //         {
    //             title: "Women's Western Wear",
    //             items: [
    //                 "Dresses Under ₹599",
    //                 "Tops Under ₹399",
    //                 "Jeans Under ₹599",
    //                 "Trousers Under ₹699",
    //                 "T-shirts Under ₹299",
    //                 "Shirts Under ₹499",
    //                 "Skirts Under ₹499",
    //                 "Shorts Under ₹699",
    //                 "Co-ords Under ₹799",
    //                 "Jumpsuits Under ₹899",
    //                 "Track pants Under ₹699",
    //                 "Jackets Under ₹899",
    //                 "Sweatshirts Under ₹699",
    //                 "Sweaters Under ₹899"
    //             ]
    //         },
    //         {
    //             title2: "Women's Ethnic Wear",
    //             items2: [
    //                 "Kurtas Under ₹399",
    //                 "Kurtis Under ₹499",
    //                 "Kurta sets Under ₹499",
    //                 "Ethnic Dresses Under ₹999",
    //                 "Palazzos Under ₹799"
    //             ],
    //         },

    //         {
    //             title3: "Lingerie & Loungewear",
    //             items3: [
    //                 "Bras Under ₹399",
    //                 "Night suits Under ₹799",
    //                 "Nightdresses Under ₹999",
    //                 "Lounge pants Under ₹999",
    //                 "Briefs Under ₹599"
    //             ]
    //         },
    //         {
    //             title4: "Men's Casual Wear",
    //             items4: [
    //                 "T-shirts Under ₹299",
    //                 "Shirts Under ₹499",
    //                 "Jeans Under ₹599",
    //                 "Trousers Under ₹699",
    //                 "Shorts Under ₹599",
    //                 "Track pants Under ₹699",
    //                 "Jackets Under ₹899",
    //                 "Sweatshirts Under ₹699",
    //                 "Sweaters Under ₹999",
    //                 "Co-ords Under ₹999"
    //             ],
    //         },
    //         {
    //             title5: "Men's Occasion Wear",
    //             items5: [
    //                 "Kurtas Under ₹799",
    //                 "Kurta Sets Under ₹999"
    //             ]
    //         },
    //         {
    //             title6: "Women's Footwear",
    //             items6: [
    //                 "Heels Under ₹599",
    //                 "Flats Under ₹499",
    //                 "Casual shoes Under ₹699",
    //                 "Sports shoes Under ₹999",
    //                 "Flip flops Under ₹799",
    //                 "Boots Under ₹999",
    //                 "Ballerinas Under ₹799"
    //             ],
    //         },
    //         {
    //             title7: "Men's Footwear",
    //             items7: [
    //                 "Casual shoes Under ₹799",
    //                 "Sports shoes Under ₹999",
    //                 "Formal shoes Under ₹999",
    //                 "Sandals Under ₹799",
    //                 "Flip flops Under ₹499",
    //                 "Boots Under ₹999"
    //             ]
    //         },
    //         {
    //             title8: "Beauty & Grooming",
    //             items8: [
    //                 "Skincare Under ₹299",
    //                 "Haircare Under ₹399",
    //                 "Bath & Body Under ₹399",
    //                 "MakeUp Under ₹299",
    //                 "Fragrances Under ₹399",
    //                 "Appliances Under ₹999"
    //             ],
    //         },
    //         {
    //             title9: "Accessories",
    //             items9: [
    //                 "Jewellery Under ₹299",
    //                 "Handbags Under ₹499",
    //                 "Clutches Under ₹999",
    //                 "Backpacks Under ₹699",
    //                 "Wallets Under ₹499",
    //                 "Sunglasses Under ₹699",
    //                 "Belts Under ₹799",
    //                 "Caps Under ₹899"
    //             ]
    //         }
    //     ]
    // }])

    const colorCode = (name) => {

        if(name == "MEN"){
            return "#ee5f73"
        }else if(name == "WOMEN"){
            return "#fb56c1"
        }else if(name == "KIDS"){
            return "#f26a10"
        }else if(name == "HOME"){
            return "#f2c210"
        }else if(name == "BEAUTY"){
            return "#0db7af"
        }else if(name == "GENZ"){
            return "#0db7af"
        }

    }

  return (
        <AppBar
        position="sticky"
        sx={{
            background: "#fff",
            color: "#282c3f",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
        }}
        >
            <Toolbar
                sx={{
                height: "80px",
                display: "flex",
                justifyContent: "space-between"
                }}
            >
                {/* LEFT */}

                <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    position: "relative"
                }}
                >
                <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-2709168-2249158.png"
                    alt="logo"
                    width={50}
                />

                {["MEN","WOMEN","KIDS","HOME","BEAUTY","GENZ"].map((menu) => (
                    <Box
                    key={menu}
                    onMouseEnter={() => setActiveMenu(menu)}
                    sx={{
                        height: "70px",
                        display: "flex",
                        alignItems: "center"
                    }}
                    >
                    <Typography
                        sx={{
                        fontWeight: 700,
                        fontSize: "14px",
                        cursor: "pointer",
                        height: "80px",
                        display: "flex",
                        alignItems: "center",
                        borderBottom:
                            activeMenu === menu
                            ? `4px solid ${colorCode(activeMenu)}`
                            : "none"
                        }}
                    >
                        {menu}
                    </Typography>
                    </Box>
                ))}

                {activeMenu === "MEN" && <MENComp activeMenu={activeMenu} setActiveMenu={setActiveMenu} /> }

                {activeMenu === "WOMEN" && <WOMENComp activeMenu={activeMenu} setActiveMenu={setActiveMenu} /> }

                {activeMenu === "KIDS" && <KIDSComp activeMenu={activeMenu} setActiveMenu={setActiveMenu} /> }

                {activeMenu === "HOME" && <HOMEComp activeMenu={activeMenu} setActiveMenu={setActiveMenu} /> }

                {activeMenu === "BEAUTY" && <BEAUTYComp activeMenu={activeMenu} setActiveMenu={setActiveMenu} /> }

                {activeMenu === "GENZ" && <GENZComp activeMenu={activeMenu} setActiveMenu={setActiveMenu} /> }

                </Box>

                {/* SEARCH */}

                <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "#f5f5f6",
                    width: "450px",
                    p: 1.5,
                    borderRadius: 1
                }}
                >
                <SearchIcon />
                <input
                    placeholder="Search for products, brands and more"
                    style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    width: "100%",
                    marginLeft: "10px"
                    }}
                />
                </Box>

                {/* RIGHT */}

                <Box sx={{ display: "flex", gap: 4 }}>
                <Box textAlign="center">
                    <PersonIcon />
                    <Typography fontSize={12}>
                    Profile
                    </Typography>
                </Box>

                <Box textAlign="center">
                    <FavoriteBorderIcon />
                    <Typography fontSize={12}>
                    Wishlist
                    </Typography>
                </Box>

                <Box textAlign="center">
                    <ShoppingBagOutlinedIcon />
                    <Typography fontSize={12}>
                    Bag
                    </Typography>
                </Box>
                </Box>
            </Toolbar>
        </AppBar>
  );
};

export default Header;