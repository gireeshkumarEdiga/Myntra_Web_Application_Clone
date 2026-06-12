import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';

const MENComp = ({activeMenu,setActiveMenu,}) => {

      const [menTopWear, setMenTopWear] = useState(["T-Shirts","Casual Shirts","Formal Shirts","Sweatshirts","Sweaters","Jackets","Blazers & Coats","Suits","Rain Jackets"]);
      const [menIndianFestivalpWear, setMenIndianFestivalWear] = useState(["Kurtas & Kurta Sets","Sherwanis","Nehru Jackets","Dhotis"]);
      const [menBottomWear, setMenBottomWear] = useState(["Jeans","Casual Trousers","Formal Trousers","Shorts","Track Pants & Joggers"]);
      const [menInnerSleeperWear, setMenInnerSleeperWear] = useState(["Briefs & Trunks","Boxers","Vests","Sleepwear & Loungewear","Thermals"]);
      const [menPlusSize, setMenPlusSize] = useState([]); 
      const [menFootWear, setMenFootWear] = useState(["Casual Shoes","Sports Shoes","Formal Shoes","Sneakers","Sandals & Floaters","Flip Flops","Socks"]);
      const [menPersonalCareGrooming, setPersonalCareGrooming] = useState([]);
      const [menSunGlassesFrames, setMenSunGlassesFrames] = useState([]);
      const [menWatches, setMenWatches] = useState([]);
      const [menSportsActiveWear, setMenSportsActiveWear] = useState([ "Sports Shoes","Sports Sandals","Active T-Shirts","Track Pants & Shorts","Tracksuits","Jackets & Sweatshirts","Sports Accessories","Swimwear"]);
      const [menGadgets, setMenGadgets] = useState(["Smart Wearables","Fitness Gadgets","Headphones","Speakers"]);
      const [menFashionAccessories, setMenFashionAccessories] = useState(["Wallets","Belts","Perfumes & Body Mists","Trimmers","Deodorants","Ties, Cufflinks & Pocket","Squares","Accessory Gift Sets","Caps & Hats","Mufflers, Scarves & Gloves","Phone Cases","Rings & Wristwear","Helmets"]);
      const [menBagsBackpacks, setMenBagsBackpacks] = useState([]);
      const [menLuggagesTrolleys, setMenLuggagesTrolleys] = useState([]);

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
          width: "940px",
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
                              {"TopWear"}
                          </Typography>

                          {menTopWear.length !== 0 && menTopWear.map((x,i) => {
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
                              {"Indian & Festive Wear"}
                          </Typography>

                          {menIndianFestivalpWear.length !== 0 && menIndianFestivalpWear.map((x,i) => {
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
                              {"Bottomwear"}
                          </Typography>

                          {menBottomWear.length !== 0 && menBottomWear.map((x,i) => {
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
                              {"Innerwear & Sleepwear"}
                          </Typography>

                          {menInnerSleeperWear.length !== 0 && menInnerSleeperWear.map((x,i) => {
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

                          {menPlusSize.length !== 0 && menPlusSize.map((x,i) => {
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
                              {"Footwear"}
                          </Typography>

                          {menFootWear.length !== 0 && menFootWear.map((x,i) => {
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
                              {"Personal Care & Grooming"}
                          </Typography>

                          {menPersonalCareGrooming.length !== 0 && menPersonalCareGrooming.map((x,i) => {
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

                          {menSunGlassesFrames.length !== 0 && menSunGlassesFrames.map((x,i) => {
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
                              {"Watches"}
                          </Typography>

                          {menWatches.length !== 0 && menWatches.map((x,i) => {
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
                              {"Sports & Active Wear"}
                          </Typography>

                          {menSportsActiveWear.length !== 0 && menSportsActiveWear.map((x,i) => {
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
                              {"Gadgets"}
                          </Typography>

                          {menGadgets.length !== 0 && menGadgets.map((x,i) => {
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
                              {"Fashion Accessories"}
                          </Typography>

                          {menFashionAccessories.length !== 0 && menFashionAccessories.map((x,i) => {
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
                              {"Bags & Backpacks"}
                          </Typography>

                          {menBagsBackpacks.length !== 0 && menBagsBackpacks.map((x,i) => {
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

                          {menLuggagesTrolleys.length !== 0 && menLuggagesTrolleys.map((x,i) => {
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

export default MENComp
