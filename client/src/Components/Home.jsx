import React, { useState ,useEffect, useCallback } from 'react'
import {Box, Typography, IconButton, Grid, Card, CardMedia, CardContent} from "@mui/material";
import { connect } from 'react-redux';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from 'axios';
import { selectedCategoryAction } from './Redux/Action';
import { useNavigate } from 'react-router-dom';

// Array holding your uploaded image assets
const CAROUSEL_IMAGES = [
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg", // Handbags Banner
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg", // U.S. Polo Assn. Banner
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/AUGUST/25/0pfZkpSF_60a17fdbda0a4622b8bd1f79585836c0.png", // Gen-Z Fashion fwd Banner
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg" // Activewear Banner
];

const FLIPPER_IMAGES = [
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/20/G3nDKp8I_ceb585ae8826431d9a98ed1d7bda9eec.gif", // Flat 7.5% Cashback (Flipkart/SBI)
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JUNE/20/G3nDKp8I_ceb585ae8826431d9a98ed1d7bda9eec.gif" // 10% Instant Discount (BOBCARD/Kotak)
];

const Home = ({AUTH_TOKEN,USER_DETAILS,callforSelectedCategory}) => {

  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [categoryList, setCategoryList] = useState([]);
  //const [selectedCategory, setSelectedCategory] = useState({});

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? CAROUSEL_IMAGES.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide effect matching e-commerce standards (3.5-second intervals)
  useEffect(() => {
    const timer = setInterval(handleNext, 3500);
    return () => clearInterval(timer);
  }, [handleNext]);

  useEffect(() => {
    // Automatically flips between the two images every 3 seconds
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const callforCategoryList = async () => {

    try{

      const response = await axios.post("http://localhost:8000/api/Category/Categories",{
        "MEASURE" : "GET_CATEGORY_LIST",
      });
      return response;

    }catch(error){
      console.log("error : ",error.message);
    }

  }

  const categoryHandler = (data) => {
    console.log("clicked : ",data)
    //setSelectedCategory(data)
    callforSelectedCategory(data);
    navigate("/products")
  }

  useEffect(() => {

    setCategoryList([]);

    callforCategoryList()
    .then((data) => {

      if(data == null){
        setCategoryList([]);
      }else{
        console.log("Category List : ",data?.data);
        data = data?.data?.Data;
        console.log("Category List : ",data);
        setCategoryList(data);

      }

    })

  },[])

  useEffect(() => {
    console.log("AUTH_TOKEN : ",AUTH_TOKEN);
  },[AUTH_TOKEN])

  useEffect(() => {
    console.log("USER_DETAILS : ",USER_DETAILS);
  },[USER_DETAILS])

  useEffect(() => {
    console.log("categoryList : ",categoryList);
  },[categoryList])

  return (
    <div>
      
      <Box sx={{my:5}} >
        
        {/* <Typography variant='h5' >Testing in Progress</Typography> */}

        <Box 
          sx={{ 
            width: "100%", 
            position: "relative", 
            overflow: "hidden",
            backgroundColor: "#fff"
          }}
        >
          {/* Top Discount Header Tagline mirroring Myntra's top global banner row */}
          <Box 
            sx={{
      
              backgroundColor: "#ff2436",
              color: "#fff",
              textAlign: "center",
              py: 1,
              fontWeight: 700,
              fontSize: { xs: "14px", sm: "18px" },
              letterSpacing: "1px",
              height:"70px",
              borderRadius:"15px",
              margin:"0px 40px",
              width:"100%"
            }}
          >

            <Box sx={{fontSize:"40px"}} >FLAT ₹300 OFF ON FIRST PURCHASE</Box>
            {/* <Grid container >
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}  >
                <Box sx={{textAlign:"center"}} >
                   FLAT ₹300 OFF
                </Box>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6} >
                <Box sx={{textAlign:"center"}} >
                   ON FIRST PURCHASE
                </Box>
              </Grid>
            </Grid> */}

          </Box>

          {/* Main Slider Track Wrapper */}
          <Box
            sx={{
              mt:2,
              display: "flex",
              width: "100%",
              height: { xs: "220px", sm: "360px", md: "480px" },
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)", // Smooth ease out snap
            }}
          >
            {CAROUSEL_IMAGES.map((src, index) => (
              <Box
                key={index}
                component="img"
                src={src}
                alt={`Promo Slider Banner ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  flexShrink: 0,
                  cursor: "pointer"
                }}
              />
            ))}
          </Box>

          {/* Navigation Arrow Controls — Hidden on small mobile touch surfaces */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "55%",
              left: "20px",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255,255,255,0.7)",
              color: "#282c3f",
              display: { xs: "none", sm: "inline-flex" },
              "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" }
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "55%",
              right: "20px",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255,255,255,0.7)",
              color: "#282c3f",
              display: { xs: "none", sm: "inline-flex" },
              "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" }
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>

          {/* Bottom Pagination Dots */}
          <Box
            sx={{
              position: "absolute",
              bottom: "15px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "8px",
              zIndex: 10
            }}
          >
            {CAROUSEL_IMAGES.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: index === currentIndex ? "12px" : "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: index === currentIndex ? "#3e4152" : "rgba(0, 0, 0, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              />
            ))}
          </Box>

        </Box>

          <Box
            sx={{
              width: "calc(100% - 80px)", // Matches the margin spacing of your top red banner
              margin: "15px 40px",        // Uniform 40px left/right margins
              overflow: "hidden",
              borderRadius: "20px",       // Matches the smooth pill-border layout in your uploaded screenshots
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff"
            }}
          >
            <Box
              component="img"
              src={FLIPPER_IMAGES[imageIndex]}
              alt="Bank Offers Promotion"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                // CSS Crossfade Transition gives it a professional fade change
                transition: "opacity 0.5s ease-in-out",
                objectFit: "contain"
              }}
            />
          </Box>

          <Box sx={{ margin: "15px 40px", }} >
              <Grid container  >
                {categoryList.length !==0 && categoryList.map((item) => (
                  <Grid item key={item._id} xl={2} lg={2} sx={{width:"16.6%"}}  >

                      {/* Product Image */}
                      <img
                        src={item.image}
                        alt={item.category}
                        style={{
                            margin: "15px 10px",
                            minwidth: "240px",
                            maxWidth : "240px",
                            minHeight: "270px",
                            maxHeight: "270px",
                            cursor: "pointer"
                        }}
                        onClick={() => categoryHandler(item)}
                    />

                  </Grid>
                ))}
              </Grid>
          </Box>
            

      </Box>

    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    AUTH_TOKEN : state.TOKEN.TOKEN,
    USER_DETAILS : state.USERDETAILS.USERDETAILS
  }
  
}

const mapDispatchToProps = (dispatch) => ({
  callforSelectedCategory : (data) => dispatch(selectedCategoryAction(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
