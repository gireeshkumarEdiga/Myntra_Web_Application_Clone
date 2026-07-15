import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Divider,
  Button,
  Snackbar, 
  Alert,
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
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { authTokenAction, userDetailsAction } from "../Redux/Action";

const Header = ({AUTH_TOKEN,USER_DETAILS,storeTokenfromLogin,userDetailsfromLogin}) => {

    const navigate = useNavigate()
    const [activeMenu, setActiveMenu] = useState("");
    const [logoutStatus, setLogoutStatus] = useState(false);

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

    const loginSignupHandler = () => {
        console.log("clicked");
         setActiveMenu(""); 
         navigate("/login");
    }

    const logoutHandler = () => {

        setLogoutStatus(true);

        setTimeout(() => {
            storeTokenfromLogin("");
            userDetailsfromLogin({});
            setActiveMenu("");
            navigate("/");
            setLogoutStatus(false);
        },2000);

    }

    const handleLogoutClose = () => {
        setLogoutStatus(false);
    }

    const listHandler = (name) => {

        console.log("clicked : ",name)

        if(name === "Saved Addresses"){
            navigate("/address")
        }

    }

    const callforCartPageHandler = () => {
        navigate("/cart")
    }

      useEffect(() => {
        console.log("AUTH_TOKEN : ",AUTH_TOKEN);
      },[AUTH_TOKEN])
    
      useEffect(() => {
        console.log("USER_DETAILS : ",USER_DETAILS);
      },[USER_DETAILS])

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
                <Link to="/" style={{textDecoration:"none"}} >
                    <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-2709168-2249158.png"
                    alt="logo"
                    width={50}
                    />
                </Link>

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

                    <Box textAlign="center"
                            onMouseEnter={() => setActiveMenu("Profile")}
                            //onMouseLeave={() => setActiveMenu("")}
                    >
                        <Box
                            sx={{cursor:"pointer"}}
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

                                    {AUTH_TOKEN === "" && 
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
                                            onClick={loginSignupHandler}
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
                                        </Box> 
                                    }

                                    {AUTH_TOKEN !== "" && 
                                    <Box sx={{ px: 3, py : 1 }}>
                                        <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: "16px"
                                        }}
                                        >
                                        Hello {USER_DETAILS?.firstName}
                                        </Typography>

                                        <Typography
                                        sx={{
                                            color: "#696b79",
                                            fontSize: "14px",
                                            mt: 0.5
                                        }}
                                        >
                                        {USER_DETAILS?.mobile}
                                        </Typography>
                                            <Button
                                            variant="outlined"
                                            onClick={logoutHandler}
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
                                                Logout
                                            </Button>
                                    </Box> }

                                    <Box sx={{ px: 3, py : 1 }}>


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
                                            onClick={() => listHandler(item)}
                                        >
                                            {item}
                                        </Typography>
                                        ))}

                                    </Box>

                                </Box>

                            </Box>}
                        </Box>
                    </Box>

                    <Box textAlign="center"
                        onMouseEnter={() => setActiveMenu("")}
                        sx={{cursor:"pointer"}}
                        onClick={callforCartPageHandler}
                    >
                        <FavoriteBorderIcon />
                        <Typography fontSize={12}>
                        Wishlist
                        </Typography>
                    </Box>

                    <Box textAlign="center"
                        onMouseEnter={() => setActiveMenu("")}
                        >
                        <ShoppingBagOutlinedIcon />
                        <Typography fontSize={12}>
                        Bag
                        </Typography>
                    </Box>

                </Box>

            </Toolbar>

            <Snackbar
                open={logoutStatus}
                autoHideDuration={3000} // Closes automatically after 3 seconds
                onClose={handleLogoutClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }} // Positions it top-center
            >
                <Alert 
                onClose={handleLogoutClose} 
                severity="success" 
                variant="filled" 
                sx={{ 
                    width: "100%", 
                    fontWeight: 600,
                    backgroundColor: "#4caf50", // Flat clean green alert background
                    fontSize: "14px",
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)"
                }}
                >
                Logout Successfully!
                </Alert>
            </Snackbar>

        </AppBar>
  );
};

const mapStateToProps = (state) => {
    return {
        AUTH_TOKEN : state.TOKEN.TOKEN,
        USER_DETAILS : state.USERDETAILS.USERDETAILS
    }
}

const mapDispatchToProps = (dispatch) => ({

    storeTokenfromLogin : (data) => dispatch(authTokenAction(data)),
    userDetailsfromLogin : (data) => dispatch(userDetailsAction(data)),

});

export default connect(mapStateToProps,mapDispatchToProps)(Header);