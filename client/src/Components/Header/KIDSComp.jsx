import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';

const KIDSComp = ({activeMenu,setActiveMenu,}) => {

      const [kidsBoysClothing, setKidsBoysClothing] = useState(["T-Shirts","Shirts","Shorts","Jeans","Trousers","Clothing Sets","Ethnic Wear","Track Pants & Pyjamas","Jacket, Sweater & Sweatshirts","Party Wear","Innerwear & Thermals","Nightwear & Loungewear","Value Packs"]);
      const [kidsGirlsClothing, setKidsGirlsClothing] = useState(["Dresses","Tops","Tshirts","Clothing Sets","Lehenga choli","Kurta Sets","Party wear","Dungarees & Jumpsuits","Skirts & shorts","Tights & Leggings","Jeans, Trousers & Capris","Jacket, Sweater & Sweatshirts","Innerwear & Thermals","Nightwear & Loungewear","Value Packs"]);
      const [kidsFootwear, setKidsFootwear] = useState(["Casual Shoes","Flipflops","Sports Shoes","Flats","Sandals","Heels","School Shoes","Socks"]);
      const [kidsToysGames, setKidsToysGames] = useState(["Learning & Development","Activity Toys","Soft Toys","Action Figure / Play set"]);
      const [kidsInfants, setKidsInfants] = useState(["Bodysuits","Rompers & Sleepsuits","Clothing Sets","Tshirts & Tops","Dresses","Bottom wear","Winter Wear","Innerwear & Sleepwear","Infant Care"]); 
      const [kidsHomeBath, setKidsHomeBath] = useState([]);
      const [kidsPersonalCare, setKidsPersonalCare] = useState([]);
      const [kidsKidsAccessories, setKidsKidsAccessories] = useState(["Bags & Backpacks","Watches","Jewellery & Hair accessory","Sunglasses","Masks & Protective Gears","Caps & Hats"]);
      const [kidsBrands, setKidsBrands] = useState(["H&M","Max Kids","Pantaloons","United Colors Of Benetton Kids","YK","U.S. Polo Assn. Kids","Mothercare","HRX"]);


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
                              {"Boys Clothing"}
                          </Typography>

                          {kidsBoysClothing.length !== 0 && kidsBoysClothing.map((x,i) => {
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
                              {"Girls Clothing"}
                          </Typography>

                          {kidsGirlsClothing.length !== 0 && kidsGirlsClothing.map((x,i) => {
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

                          {kidsFootwear.length !== 0 && kidsFootwear.map((x,i) => {
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
                              {"Toys & Games"}
                          </Typography>

                          {kidsToysGames.length !== 0 && kidsToysGames.map((x,i) => {
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
                              {"Infants"}
                          </Typography>

                          {kidsInfants.length !== 0 && kidsInfants.map((x,i) => {
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
                              {"Home & Bath"}
                          </Typography>

                          {kidsHomeBath.length !== 0 && kidsHomeBath.map((x,i) => {
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
                              {"Personal Care"}
                          </Typography>

                          {kidsPersonalCare.length !== 0 && kidsPersonalCare.map((x,i) => {
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
                              {"Kids Accessories"}
                          </Typography>

                          {kidsKidsAccessories.length !== 0 && kidsKidsAccessories.map((x,i) => {
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
                              {"Brands"}
                          </Typography>

                          {kidsBrands.length !== 0 && kidsBrands.map((x,i) => {
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

export default KIDSComp
