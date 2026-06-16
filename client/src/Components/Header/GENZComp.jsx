import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import axios from "axios";

const GENZComp = ({activeMenu,setActiveMenu,}) => {

      const [genZWomenWesternWear, setGenZWomenWesternWear] = useState(["Dresses Under ₹599","Tops Under ₹399","Jeans Under ₹599","Trousers Under ₹699","T-shirts Under ₹299","Shirts Under ₹499","Skirts Under ₹499","Shorts Under ₹699","Co-ords Under ₹799","Jumpsuits Under ₹899","Track pants Under ₹699","Jackets Under ₹899","Sweatshirts Under ₹699","Sweaters Under ₹899"]);
      const [genZWomenEthnicWear, setGenZWomenEthnicWear] = useState(["Kurtas Under ₹399","Kurtis Under ₹499","Kurta sets Under ₹499","Ethnic Dresses Under ₹999","Palazzos Under ₹799"]);
      const [genZLingerieLoungewear, setGenZLingerieLoungewear] = useState(["Bras Under ₹399","Night suits Under ₹799","Nightdresses Under ₹999","Lounge pants Under ₹999","Briefs Under ₹599"]);
      const [genZMenCasualWear, setGenZMenCasualWear] = useState(["T-shirts Under ₹299","Shirts Under ₹499","Jeans Under ₹599","Trousers Under ₹699","Shorts Under ₹599","Track pants Under ₹699","Jackets Under ₹899","Sweatshirts Under ₹699","Sweaters Under ₹999","Co-ords Under ₹999"]);
      const [genZMenOccassionWear, setGenZMenOccassionWear] = useState(["Kurtas Under ₹799","Kurta Sets Under ₹999"]); 
      const [genZWomenFootwear, setGenZWomenFootwear] = useState(["Heels Under ₹599","Flats Under ₹499","Casual shoes Under ₹699","Sports shoes Under ₹999","Flip flops Under ₹799","Boots Under ₹999","Ballerinas Under ₹799"]);
      const [genZMenFootwear, setGenZMenFootwear] = useState(["Casual shoes Under ₹799","Sports shoes Under ₹999","Formal shoes Under ₹999","Sandals Under ₹799","Flip flops Under ₹499","Boots Under ₹999"]);
      const [genZBeautyGrooming, setGenZBeautyGrooming] = useState(["Skincare Under ₹299","Haircare Under ₹399","Bath & Body Under ₹399","MakeUp Under ₹299","Fragrances Under ₹399","Appliances Under ₹999"]);
      const [genZAccessories, setGenZAccessories] = useState(["Jewellery Under ₹299","Handbags Under ₹499","Clutches Under ₹999","Backpacks Under ₹699","Wallets Under ₹499","Sunglasses Under ₹699","Belts Under ₹799","Caps Under ₹899"]);

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

        const callforHeadersGenZList = async () => {

         try {
            console.log("API Calling...");

            const response = await axios.post("http://localhost:8000/api/Heading/MyntraHeadingCategoriesListApi",{
                "MEASURE" : "GET_GENZ_DETAILS_FROM_HEADER"
            })
            return response;
            
        } catch(error) {
            console.log("ERROR:", error);
        }


    }

    useEffect(() => {

      setGenZWomenWesternWear([]);
      setGenZWomenEthnicWear([]);
      setGenZLingerieLoungewear([]);
      setGenZMenCasualWear([]);
      setGenZMenOccassionWear([]); 
      setGenZWomenFootwear([]);
      setGenZMenFootwear([]);
      setGenZBeautyGrooming([]);
      setGenZAccessories([]);


        callforHeadersGenZList()
        .then((data) => {

            if(data == null){

            }else{

                //data = JSON.parse(data);
                console.log("GenZ Category List : ",data?.data);
                data = data?.data?.Data;
                console.log("GenZ Category List : ",data);

                setGenZWomenWesternWear(data?.[0]?.["Women_Western_Wear"]);
                setGenZWomenEthnicWear(data?.[0]?.["Women_Ethnic_Wear"]);
                setGenZLingerieLoungewear(data?.[0]?.["Lingerie_Loungewear"]);
                setGenZMenCasualWear(data?.[0]?.["Men_Casual_Wear"]);
                setGenZMenOccassionWear(data?.[0]?.["Men_Occassion_Wear"]); 
                setGenZWomenFootwear(data?.[0]?.["Women_Footwear"]);
                setGenZMenFootwear(data?.[0]?.["Men_Footwear"]);
                setGenZBeautyGrooming(data?.[0]?.["Beauty_Grooming"]);
                setGenZAccessories(data?.[0]?.["Accessories"]);

            }

        })

    },[]);

  return (
      <Box
          onMouseLeave={() => setActiveMenu("")}
          sx={{
          position: "absolute",
          top: "80px",
          width: "910px",
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
                              {"Women's Western Wear"}
                          </Typography>

                          {genZWomenWesternWear.length !== 0 && genZWomenWesternWear.map((x,i) => {
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
                              {"Women's Ethnic Wear"}
                          </Typography>

                          {genZWomenEthnicWear.length !== 0 && genZWomenEthnicWear.map((x,i) => {
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
                              {"Lingerie & Loungewear"}
                          </Typography>

                          {genZLingerieLoungewear.length !== 0 && genZLingerieLoungewear.map((x,i) => {
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
                              {"Men's Casual Wear"}
                          </Typography>

                          {genZMenCasualWear.length !== 0 && genZMenCasualWear.map((x,i) => {
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
                              {"Men's Occassion Wear"}
                          </Typography>

                          {genZMenOccassionWear.length !== 0 && genZMenOccassionWear.map((x,i) => {
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
                              {"Women's Footwear"}
                          </Typography>

                          {genZWomenFootwear.length !== 0 && genZWomenFootwear.map((x,i) => {
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
                              {"Men's Footwear"}
                          </Typography>

                          {genZMenFootwear.length !== 0 && genZMenFootwear.map((x,i) => {
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
                              {"Beauty & Grooming"}
                          </Typography>

                          {genZBeautyGrooming.length !== 0 && genZBeautyGrooming.map((x,i) => {
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
                              {"Accessories"}
                          </Typography>

                          {genZAccessories.length !== 0 && genZAccessories.map((x,i) => {
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

export default GENZComp
