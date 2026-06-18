import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import axios from "axios";

const BEAUTYComp = ({activeMenu,setActiveMenu,}) => {

      const [beautyMakeup, setBeautyMakeup] = useState(["Lipstick","Lip Gloss","Lip Liner","Mascara","Eyeliner","Kajal","Eyeshadow","Foundation","Primer","Concealer","Compact","Nail Polish"]);
      const [beautySkincareBathBody, setBeautySkincareBathBody] = useState(["Skincare, Bath & Body","Face Moisturiser","Cleanser","Masks & Peel","Sunscreen","Serum","Face Wash","Eye Cream","Lip Balm","Body Lotion","Body Wash","Body Scrub","Hand Cream"]);
      const [beautyBabyCare, setBeautyBabyCare] = useState([]);
      const [beautyMasks, setBeautyMasks] = useState([]);
      const [beautyHaircare, setBeautyHaircare] = useState(["Shampoo","Conditioner","Hair Cream","Hair Oil","Hair Gel","Hair Color","Hair Serum","Hair Accessory"]); 
      const [beautyFragrances, setBeautyFragrances] = useState(["Perfume","Deodorant","Body Mist"]);
      const [beautyAppliances, setBeautyAppliances] = useState(["Hair Straightener","Hair Dryer","Epilator"]);
      const [beautyMenGrooming, setBeautyMenGrooming] = useState(["Trimmers","Beard Oil","Hair Wax"]);
      const [beautyGiftMakeupSet, setBeautyBeautyGiftMakeupSet] = useState(["Beauty Gift","Makeup Kit"]);
      const [beautyPremiumBeauty, setBeautyPremiumBeauty] = useState([]);
      const [beautyWellnessHygiene, setBeautyWellnessHygiene] = useState([]);
      const [beautyTopBrands, setBeautyTopBrands] = useState(["Lakme","Maybelline","LOreal","Philips","Bath & Body Works","THE BODY SHOP","Biotique","Mamaearth","MCaffeine","Nivea","Lotus Herbals","LOreal Professionnel","KAMA AYURVEDA","M.A.C","Forest Essentials"]);

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

        const callforHeadersHomeList = async () => {

         try {
            console.log("API Calling...");

            const response = await axios.post("http://localhost:8000/api/Heading/MyntraHeadingCategoriesListApi",{
                "MEASURE" : "GET_BEAUTY_DETAILS_FROM_HEADER"
            })
            return response;
            
        } catch(error) {
            console.log("ERROR:", error);
        }


    }

    useEffect(() => {

    
      setBeautyMakeup([]);
      setBeautySkincareBathBody([]);
      setBeautyBabyCare([]);
      setBeautyMasks([]);
      setBeautyHaircare([]); 
      setBeautyFragrances([]);
      setBeautyAppliances([]);
      setBeautyMenGrooming([]);
      setBeautyBeautyGiftMakeupSet([]);
      setBeautyPremiumBeauty([]);
      setBeautyWellnessHygiene([]);
      setBeautyTopBrands([]);


        callforHeadersHomeList()
        .then((data) => {

            if(data == null){

            }else{

                //data = JSON.parse(data);
                console.log("Beauty Category List : ",data?.data);
                data = data?.data?.Data;
                console.log("Beauty Category List : ",data);

                setBeautyMakeup(data?.[0]?.["Makeup"]);
                setBeautySkincareBathBody(data?.[0]?.["Skincare_Bath_Body"]);
                setBeautyBabyCare(data?.[0]?.["Baby_Care"]);
                setBeautyMasks(data?.[0]?.["Masks"]);
                setBeautyHaircare(data?.[0]?.["Haircare"]); 
                setBeautyFragrances(data?.[0]?.["Fragrances"]);
                setBeautyAppliances(data?.[0]?.["Appliances"]);
                setBeautyMenGrooming(data?.[0]?.["Men_Grooming"]);
                setBeautyBeautyGiftMakeupSet(data?.[0]?.["Beauty_Gift_Makeup_Set"]);
                setBeautyPremiumBeauty(data?.[0]?.["Premium_Beauty"]);
                setBeautyWellnessHygiene(data?.[0]?.["Wellness_Hygiene"])
                setBeautyTopBrands(data?.[0]?.["Top_Brands"]);

            }

        })

    },[]);

  return (
      <Box
          onMouseLeave={() => setActiveMenu("")}
          sx={{
          position: "absolute",
          top: "80px",
          width: "750px",
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
                              {"Makeup"}
                          </Typography>

                          {beautyMakeup.length !== 0 && beautyMakeup.map((x,i) => {
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
                              {"Skincare, Bath & Body"}
                          </Typography>

                          {beautySkincareBathBody.length !== 0 && beautySkincareBathBody.map((x,i) => {
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
                              {"Baby Care"}
                          </Typography>

                          {beautyBabyCare.length !== 0 && beautyBabyCare.map((x,i) => {
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
                              {"Masks"}
                          </Typography>

                          {beautyMasks.length !== 0 && beautyMasks.map((x,i) => {
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
                              {"Haircare"}
                          </Typography>

                          {beautyHaircare.length !== 0 && beautyHaircare.map((x,i) => {
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
                              {"Fragrances"}
                          </Typography>

                          {beautyFragrances.length !== 0 && beautyFragrances.map((x,i) => {
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
                              {"Appliances"}
                          </Typography>

                          {beautyAppliances.length !== 0 && beautyAppliances.map((x,i) => {
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
                              {"Men's Grooming"}
                          </Typography>

                          {beautyMenGrooming.length !== 0 && beautyMenGrooming.map((x,i) => {
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
                              {"Beauty Gift & Makeup Set"}
                          </Typography>

                          {beautyGiftMakeupSet.length !== 0 && beautyGiftMakeupSet.map((x,i) => {
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
                              {"Premium Beauty"}
                          </Typography>

                          {beautyPremiumBeauty.length !== 0 && beautyPremiumBeauty.map((x,i) => {
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
                              {"Wellness & Hygiene"}
                          </Typography>

                          {beautyWellnessHygiene.length !== 0 && beautyWellnessHygiene.map((x,i) => {
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
                              {"Top Brands"}
                          </Typography>

                          {beautyTopBrands.length !== 0 && beautyTopBrands.map((x,i) => {
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

export default BEAUTYComp
