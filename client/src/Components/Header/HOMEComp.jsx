import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';

const HOMEComp = ({activeMenu,setActiveMenu,}) => {

      const [homeBedLinenFurnishing, setHomeBedLinenFurnishing] = useState(["Bed Runners","Mattress Protectors","Bedsheets","Bedding Sets","Blankets, Quilts & Dohars","Pillows & Pillow Covers","Bed Covers","Diwan Sets","Chair Pads & Covers","Sofa Covers"]);
      const [homeFlooring, setHomeFlooring] = useState(["Floor Runners","Carpets","Floor Mats & Dhurries","Door Mats"]);
      const [homeBath, setHomeBath] = useState(["Bath Towels","Hand & Face Towels","Beach Towels","Towels Set","Bath Rugs","Bath Robes","Bathroom Accessories","Shower Curtains"]);
      const [homeLampsLighting, setHomeLampsLighting] = useState(["Floor Lamps","Ceiling Lamps","Table Lamps","Wall Lamps","Outdoor Lamps","String Lights"]);
      const [homeHomeDécor, setHomeHomeDécor] = useState(["Plants & Planters","Aromas & Candles","Clocks","Mirrors","Wall Décor","Festive Decor","Pooja Essentials","Wall Shelves","Fountains","Showpieces & Vases","Ottoman"]); 
      const [homeCushionsCushionCovers, setHomeCushionsCushionCovers] = useState([]);
      const [homeCurtains, setHomeCurtains] = useState([]);
      const [homeFurniture, setHomeFurniture] = useState([]);
      const [homeHomeGiftSets, setHomeHomeGiftSets] = useState([]);
      const [homeKitchenTable, setHomeKitchenTable] = useState(["Table Runners","Dinnerware & Serveware","Cups and Mugs","Bakeware & Cookware","Kitchen Storage & Tools","Bar & Drinkware","Table Covers & Furnishings"]);
      const [homeStorage, setHomeStorage] = useState(["Bins","Hangers","Organisers","Hooks & Holders","Laundry Bags"]);

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
          width: "900px",
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
                              {"Bed Linen & Furnishing"}
                          </Typography>

                          {homeBedLinenFurnishing.length !== 0 && homeBedLinenFurnishing.map((x,i) => {
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
                              {"Flooring"}
                          </Typography>

                          {homeFlooring.length !== 0 && homeFlooring.map((x,i) => {
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
                              {"Bath"}
                          </Typography>

                          {homeBath.length !== 0 && homeBath.map((x,i) => {
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
                              {"Lamps & Lighting"}
                          </Typography>

                          {homeLampsLighting.length !== 0 && homeLampsLighting.map((x,i) => {
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
                              {"Home Décor"}
                          </Typography>

                          {homeHomeDécor.length !== 0 && homeHomeDécor.map((x,i) => {
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
                              {"Cushions & Cushion Covers"}
                          </Typography>

                          {homeCushionsCushionCovers.length !== 0 && homeCushionsCushionCovers.map((x,i) => {
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
                              {"Curtains"}
                          </Typography>

                          {homeCurtains.length !== 0 && homeCurtains.map((x,i) => {
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
                              {"Furniture"}
                          </Typography>

                          {homeFurniture.length !== 0 && homeFurniture.map((x,i) => {
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
                              {"Home Gift Sets"}
                          </Typography>

                          {homeHomeGiftSets.length !== 0 && homeHomeGiftSets.map((x,i) => {
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
                              {"Kitchen & Table"}
                          </Typography>

                          {homeKitchenTable.length !== 0 && homeKitchenTable.map((x,i) => {
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
                              {"Storage"}
                          </Typography>

                          {homeStorage.length !== 0 && homeStorage.map((x,i) => {
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

export default HOMEComp
