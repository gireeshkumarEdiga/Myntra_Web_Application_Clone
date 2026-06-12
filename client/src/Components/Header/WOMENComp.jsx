import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';

const WOMENComp = ({activeMenu,setActiveMenu,}) => {

      const [womenIndianFusionWear, setWomenIndianFusionWear] = useState(["Kurtas & Suits","Kurtis, Tunics & Tops","Sarees","Ethnic Wear","Leggings, Salwars & Churidars","Skirts & Palazzos","Dress Materials","Lehenga Cholis","Dupattas & Shawls","Jackets"]);
      const [womenBeltsScarves, setWomenBeltsScarves] = useState([]);
      const [womenWatchesWearables, setWomenWatchesWearables] = useState([]);
      const [womenWesternWear, setWomenWesternWear] = useState(["Dresses","Tops","Tshirts","Jeans","Trousers & Capris","Shorts & Skirts","Co-ords","Playsuits","Jumpsuits","Shrugs","Sweaters & Sweatshirts","Jackets & Coats","Blazers & Waistcoats"]);
      const [womenPlusSize, setWomenPlusSize] = useState([]); 
      const [womenMaternity, setWomenMaternity] = useState([]);
      const [womenSunglassesFrames, setWomeSunglassesFrames] = useState([]);
      const [womenFootwear, setWomenFootwear] = useState(["Flats","Casual Shoes","Heels","Boots","Sports Shoes & Floaters"]);
      const [womenSportsActiveWear, setWomenSportsActiveWear] = useState(["Clothing","Footwear","Sports Accessories","Sports Equipment"]);
      const [womenLingerieSleepwear, setWomenLingerieSleepwear] = useState(["Bra","Briefs","Shapewear","Sleepwear & Loungewear","Swimwear","Camisoles & Thermals"]);
      const [womenBeautyPersonalCare, setWomenBeautyPersonalCare] = useState(["Makeup","Skincare","Premium Beauty","Lipsticks","Fragrances"]);
      const [womenGadgets, setWomenGadgets] = useState(["Smart Wearables","Fitness Gadgets","Headphones","Speakers"]);
      const [womenJewellery, setWomenJewellery] = useState(["Fashion Jewellery","Fine Jewellery","Earrings"]);
      const [womenBackpacks, setWomenBackpacks] = useState([]);
      const [womenHandbagsBagsWallets, setWomenHandbagsBagsWallets] = useState([]);
      const [womenLuggagesTrolleys, setWomenLuggagesTrolleys] = useState([]);


      const colorCode = (name) => {

        if(name === "MEN"){
            return "#ee5f73"
        }else if(name === "WOMEN"){
            return "#fb56c1"
        }else if(name === "KIDS"){
            return "#f26a10"
        }else if(name === "HOME"){
            return "#f2c210"
        }else if(name === "BEAUTY"){
            return "#0db7af"
        }else if(name === "GENZ"){
            return "#0db7af"
        }

    }

  return (
      <Box
          onMouseLeave={() => setActiveMenu("")}
          sx={{
          position: "absolute",
          top: "80px",
          width: "950px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 15px rgba(0,0,0,.15)",
          display: "flex",
          zIndex: 999,
          py: 1,
          px : 2,
          textAlign : "start"
          }}
      >

          <Grid container>

              <Grid item xl={true} lg={true} md={true} >

                  <Box  >

                      <Box sx={{px : 2,py:1}} >

                          <Typography
                              sx={{
                              color: `${colorCode(activeMenu)}`,
                              fontWeight: 700,
                              fontSize: "14px",
                              mb: 1
                              }}
                          >
                              {"Indian & Fusion Wear"}
                          </Typography>

                          {womenIndianFusionWear.length !== 0 && womenIndianFusionWear.map((x,i) => {
                              return (
                              <Typography
                                  key={x}
                                  sx={{
                                  fontSize: "12px",
                                  lineHeight: "24px",
                                  cursor: "pointer",
                                  "&:hover": {
                                      fontWeight: 700
                                  }
                                  }}
                              >
                                  {x}
                              </Typography>
                              )
                          }) }

                      </Box>
                      <Box sx={{px : 2,py:1}} >

                          <Typography
                              sx={{
                              color: `${colorCode(activeMenu)}`,
                              fontWeight: 700,
                              fontSize: "14px",
                              mb: 1
                              }}
                          >
                              {"Belts, Scarves & More"}
                          </Typography>

                          {womenBeltsScarves.length !== 0 && womenBeltsScarves.map((x,i) => {
                              return (
                              <Typography
                                  key={x}
                                  sx={{
                                  fontSize: "12px",
                                  lineHeight: "24px",
                                  cursor: "pointer",

                                  "&:hover": {
                                      fontWeight: 700
                                  }
                                  }}
                              >
                                  {x}
                              </Typography>
                              )
                          }) }

                      </Box>
                      <Box sx={{px : 2,py:1}} >

                          <Typography
                              sx={{
                              color: `${colorCode(activeMenu)}`,
                              fontWeight: 700,
                              fontSize: "14px",
                              mb: 1
                              }}
                          >
                              {"Watches & Wearables"}
                          </Typography>

                          {womenWatchesWearables.length !== 0 && womenWatchesWearables.map((x,i) => {
                              return (
                              <Typography
                                  key={x}
                                  sx={{
                                  fontSize: "12px",
                                  lineHeight: "24px",
                                  cursor: "pointer",

                                  "&:hover": {
                                      fontWeight: 700
                                  }
                                  }}
                              >
                                  {x}
                              </Typography>
                              )
                          }) }

                      </Box>

                  </Box>

              </Grid>
              <Grid item xl={true} lg={true} md={true} >
                  
                  <Box  >

                      <Box sx={{px : 2,py:1}} >

                          <Typography
                              sx={{
                              color: `${colorCode(activeMenu)}`,
                              fontWeight: 700,
                              fontSize: "14px",
                              mb: 1
                              }}
                          >
                              {"Western Wear"}
                          </Typography>

                          {womenWesternWear.length !== 0 && womenWesternWear.map((x,i) => {
                              return (
                              <Typography
                                  key={x}
                                  sx={{
                                  fontSize: "12px",
                                  lineHeight: "24px",
                                  cursor: "pointer",
                                  "&:hover": {
                                      fontWeight: 700
                                  }
                                  }}
                              >
                                  {x}
                              </Typography>
                              )
                          }) }

                      </Box>
                      <Box sx={{px : 2,py:1}} >

                          <Typography
                              sx={{
                              color: `${colorCode(activeMenu)}`,
                              fontWeight: 700,
                              fontSize: "14px",
                              mb: 1
                              }}
                          >
                              {"Plus Size"}
                          </Typography>

                          {womenPlusSize.length !== 0 && womenPlusSize.map((x,i) => {
                              return (
                              <Typography
                                  key={x}
                                  sx={{
                                  fontSize: "12px",
                                  lineHeight: "24px",
                                  cursor: "pointer",
                                  "&:hover": {
                                      fontWeight: 700
                                  }
                                  }}
                              >
                                  {x}
                              </Typography>
                              )
                          }) }

                      </Box>

                  </Box>
              </Grid>
              <Grid item xl={true} lg={true} md={true} >
                  
                  <Box  >

                      <Box sx={{px : 2,py:1}} >

                          <Typography
                              sx={{
                              color: `${colorCode(activeMenu)}`,
                              fontWeight: 700,
                              fontSize: "14px",
                              mb: 1
                              }}
                          >
                              {"Maternity"}
                          </Typography>

                          {womenMaternity.length !== 0 && womenMaternity.map((x,i) => {
                              return (
                              <Typography
                                  key={x}
                                  sx={{
                                  fontSize: "12px",
                                  lineHeight: "24px",
                                  cursor: "pointer",
                                  "&:hover": {
                                      fontWeight: 700
                                  }
                                  }}
                              >
                                  {x}
                              </Typography>
                              )
                          }) }

                      </Box>
                      <Box sx={{px : 2,py:1}} >

                          <Typography
                              sx={{
                              color: `${colorCode(activeMenu)}`,
                              fontWeight: 700,
                              fontSize: "14px",
                              mb: 1
                              }}
                          >
                              {"Sunglasses & Frames"}
                          </Typography>

                          {womenSunglassesFrames.length !== 0 && womenSunglassesFrames.map((x,i) => {
                              return (
                              <Typography
                                  key={x}
                                  sx={{
                                  fontSize: "12px",
                                  lineHeight: "24px",
                                  cursor: "pointer",
                                  "&:hover": {
                                      fontWeight: 700
                                  }
                                  }}
                              >
                                  {x}
                              </Typography>
                              )
                          }) }

                      </Box>
                      <Box sx={{px : 2,py:1}} >

                          <Typography
                              sx={{
                              color: `${colorCode(activeMenu)}`,
                              fontWeight: 700,
                              fontSize: "14px",
                              mb: 1
                              }}
                          >
                              {"Footwear"}
                          </Typography>

                          {womenFootwear.length !== 0 && womenFootwear.map((x,i) => {
                              return (
                              <Typography
                                  key={x}
                                  sx={{
                                  fontSize: "12px",
                                  lineHeight: "24px",
                                  cursor: "pointer",
                                  "&:hover": {
                                      fontWeight: 700
                                  }
                                  }}
                              >
                                  {x}
                              </Typography>
                              )
                          }) }

                      </Box>
                      <Box sx={{px : 2,py:1}} >

                          <Typography
                              sx={{
                              color: `${colorCode(activeMenu)}`,
                              fontWeight: 700,
                              fontSize: "14px",
                              mb: 1
                              }}
                          >
                              {"Sports & Active Wear"}
                          </Typography>

                          {womenSportsActiveWear.length !== 0 && womenSportsActiveWear.map((x,i) => {
                              return (
                              <Typography
                                  key={x}
                                  sx={{
                                  fontSize: "12px",
                                  lineHeight: "24px",
                                  cursor: "pointer",
                                  "&:hover": {
                                      fontWeight: 700
                                  }
                                  }}
                              >
                                  {x}
                              </Typography>
                              )
                          }) }

                      </Box>

                  </Box>

              </Grid>
              <Grid item xl={true} lg={true} md={true} >
                                              
                  <Box  >

                      <Box sx={{px : 2,py:1}} >

                          <Typography
                              sx={{
                              color: `${colorCode(activeMenu)}`,
                              fontWeight: 700,
                              fontSize: "14px",
                              mb: 1
                              }}
                          >
                              {"Lingerie & Sleepwear"}
                          </Typography>

                          {womenLingerieSleepwear.length !== 0 && womenLingerieSleepwear.map((x,i) => {
                              return (
                              <Typography
                                  key={x}
                                  sx={{
                                  fontSize: "12px",
                                  lineHeight: "24px",
                                  cursor: "pointer",
                                  "&:hover": {
                                      fontWeight: 700
                                  }
                                  }}
                              >
                                  {x}
                              </Typography>
                              )
                          }) }

                      </Box>
                      <Box sx={{px : 2,py:1}} >

                          <Typography
                              sx={{
                              color: `${colorCode(activeMenu)}`,
                              fontWeight: 700,
                              fontSize: "14px",
                              mb: 1
                              }}
                          >
                              {"Beauty & Personal Care"}
                          </Typography>

                          {womenBeautyPersonalCare.length !== 0 && womenBeautyPersonalCare.map((x,i) => {
                              return (
                              <Typography
                                  key={x}
                                  sx={{
                                  fontSize: "12px",
                                  lineHeight: "24px",
                                  cursor: "pointer",
                                  "&:hover": {
                                      fontWeight: 700
                                  }
                                  }}
                              >
                                  {x}
                              </Typography>
                              )
                          }) }

                      </Box>

                  </Box>

              </Grid>
              <Grid item xl={true} lg={true} md={true} >
                                              
                  <Box  >

                      <Box sx={{px : 2,py:1}} >

                          <Typography
                              sx={{
                              color: `${colorCode(activeMenu)}`,
                              fontWeight: 700,
                              fontSize: "14px",
                              mb: 1
                              }}
                          >
                              {"Gadgets"}
                          </Typography>

                          {womenGadgets.length !== 0 && womenGadgets.map((x,i) => {
                              return (
                              <Typography
                                  key={x}
                                  sx={{
                                  fontSize: "12px",
                                  lineHeight: "24px",
                                  cursor: "pointer",
                                  "&:hover": {
                                      fontWeight: 700
                                  }
                                  }}
                              >
                                  {x}
                              </Typography>
                              )
                          }) }

                      </Box>
                      <Box sx={{px : 2,py:1}} >

                          <Typography
                              sx={{
                              color: `${colorCode(activeMenu)}`,
                              fontWeight: 700,
                              fontSize: "14px",
                              mb: 1
                              }}
                          >
                              {"Jewellery"}
                          </Typography>

                          {womenJewellery.length !== 0 && womenJewellery.map((x,i) => {
                              return (
                              <Typography
                                  key={x}
                                  sx={{
                                  fontSize: "12px",
                                  lineHeight: "24px",
                                  cursor: "pointer",
                                  "&:hover": {
                                      fontWeight: 700
                                  }
                                  }}
                              >
                                  {x}
                              </Typography>
                              )
                          }) }

                      </Box>
                      <Box sx={{px : 2,py:1}} >

                          <Typography
                              sx={{
                              color: `${colorCode(activeMenu)}`,
                              fontWeight: 700,
                              fontSize: "14px",
                              mb: 1
                              }}
                          >
                              {"Backpacks"}
                          </Typography>

                          {womenBackpacks.length !== 0 && womenBackpacks.map((x,i) => {
                              return (
                              <Typography
                                  key={x}
                                  sx={{
                                  fontSize: "12px",
                                  lineHeight: "24px",
                                  cursor: "pointer",
                                  "&:hover": {
                                      fontWeight: 700
                                  }
                                  }}
                              >
                                  {x}
                              </Typography>
                              )
                          }) }

                      </Box>
                      <Box sx={{px : 2,py:1}} >

                          <Typography
                              sx={{
                              color: `${colorCode(activeMenu)}`,
                              fontWeight: 700,
                              fontSize: "14px",
                              mb: 1
                              }}
                          >
                              {"Handbags, Bags & Wallets"}
                          </Typography>

                          {womenHandbagsBagsWallets.length !== 0 && womenHandbagsBagsWallets.map((x,i) => {
                              return (
                              <Typography
                                  key={x}
                                  sx={{
                                  fontSize: "12px",
                                  lineHeight: "24px",
                                  cursor: "pointer",
                                  "&:hover": {
                                      fontWeight: 700
                                  }
                                  }}
                              >
                                  {x}
                              </Typography>
                              )
                          }) }

                      </Box>
                      <Box sx={{px : 2,py:1}} >

                          <Typography
                              sx={{
                              color: `${colorCode(activeMenu)}`,
                              fontWeight: 700,
                              fontSize: "14px",
                              mb: 1
                              }}
                          >
                              {"Luggages & Trolleys"}
                          </Typography>

                          {womenLuggagesTrolleys.length !== 0 && womenLuggagesTrolleys.map((x,i) => {
                              return (
                              <Typography
                                  key={x}
                                  sx={{
                                  fontSize: "12px",
                                  lineHeight: "24px",
                                  cursor: "pointer",
                                  "&:hover": {
                                      fontWeight: 700
                                  }
                                  }}
                              >
                                  {x}
                              </Typography>
                              )
                          }) }

                      </Box>

                  </Box>

              </Grid>


          </Grid>

      </Box>
  )
}

export default WOMENComp
