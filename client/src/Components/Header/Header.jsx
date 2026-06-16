import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Divider,
  Button
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
                        <Box
                            sx={{cursor:"pointer"}}
                            onMouseLeave={() => setActiveMenu("")}
                            onMouseEnter={() => setActiveMenu("Profile")}
                        >
                            <PersonIcon />
                            <Typography fontSize={12}>
                                Profile
                            </Typography>
                            {activeMenu === "Profile" && <Box>
                                
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: "80px",
                                        right: "30px",
                                        width: "300px",
                                        background: "#fff",
                                        boxShadow: "0 4px 20px rgba(0,0,0,.15)",
                                        border: "1px solid #eaeaea",
                                        zIndex: 9999,
                                        textAlign: "left"
                                    }}
                                    >

                                    {/* Welcome Section */}
                                    <Box sx={{ px: 3, py : 1 }}>
                                        <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: "16px"
                                        }}
                                        >
                                        Welcome
                                        </Typography>

                                        <Typography
                                        sx={{
                                            color: "#696b79",
                                            fontSize: "14px",
                                            mt: 0.5
                                        }}
                                        >
                                        To access account and manage orders
                                        </Typography>

                                        <Button
                                        variant="outlined"
                                        sx={{
                                            mt: 1,
                                            fontSize: "12px",
                                            color: "#ff3f6c",
                                            borderColor: "#d4d5d9",
                                            fontWeight: 700,
                                            width: "140px",
                                            "&:hover": {
                                            borderColor: "#ff3f6c",
                                            background: "#fff"
                                            }
                                        }}
                                        >
                                        LOGIN / SIGNUP
                                        </Button>

                                        <Divider sx={{ my: 0.5 }} />

                                        {/* Menu 1 */}
                                        {[
                                        "Orders",
                                        "Wishlist",
                                        "Gift Cards",
                                        "Contact Us"
                                        ].map((item) => (
                                        <Typography
                                            key={item}
                                            sx={{
                                            py: 0.2,
                                            fontSize: "12px",
                                            cursor: "pointer",
                                            "&:hover": {
                                                fontWeight: 600
                                            }
                                            }}
                                        >
                                            {item}
                                        </Typography>
                                        ))}

                                        <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                            py: 0.2
                                        }}
                                        >
                                        <Typography
                                            sx={{
                                                
                                            fontSize: "12px",
                                            cursor: "pointer",
                                            "&:hover": {
                                                fontWeight: 600
                                            }
                                            }}
                                        >
                                            Myntra Insider
                                        </Typography>

                                        <Box
                                            sx={{
                                            background: "#ff3f6c",
                                            color: "#fff",
                                            fontSize: "10px",
                                            px: 1,
                                            borderRadius: "2px",
                                            fontWeight: 700
                                            }}
                                        >
                                            NEW
                                        </Box>
                                        </Box>

                                        <Divider sx={{ my: 0.5 }} />

                                        {/* Menu 2 */}
                                        {[
                                        "Myntra Credit",
                                        "Coupons",
                                        "Saved Cards",
                                        "Saved VPA",
                                        "Saved Addresses"
                                        ].map((item) => (
                                        <Typography
                                            key={item}
                                            sx={{
                                            py: 0.2,
                                            fontSize: "12px",
                                            cursor: "pointer",
                                            "&:hover": {
                                                fontWeight: 600
                                            }
                                            }}
                                        >
                                            {item}
                                        </Typography>
                                        ))}
                                    </Box>

                                </Box>

                            </Box>}
                        </Box>

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