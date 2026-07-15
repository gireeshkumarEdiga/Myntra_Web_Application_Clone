import { connect } from 'react-redux';
import React from 'react'
import { useEffect } from 'react';
import {Box,TextField,Button,Typography, Grid, Card, CardMedia, CardContent} from "@mui/material";
import axios from 'axios';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { selectedItemsDetailsAction } from './Redux/Action';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useNavigate } from 'react-router-dom';

const Products = ({selectedCategory,callforSelectedItemDetails,AUTH_TOKEN}) => {

    const navigate = useNavigate();    
    const [productsList, setProductsList] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [cartStatus,setCartStatus] = useState(false);


    const callforgetEthenicWearList = async (api,measure) => {

      try{

        const response = await axios.post("http://localhost:8000/api/Category/"+api,{
          "MEASURE": measure,
        },{
          headers : {
            Authorization : `Bearer ${AUTH_TOKEN}`
          }});
        return response;

      }catch(error){
        console.log("Error : ",error.message);
      }

    }

    const selectedItemDetails = async (product) => {

      console.log("product : ",product);
      callforSelectedItemDetails(product);
      navigate("/productDetailsView");

    }

    const callforaddProductintoCart = async (data) => {

      try {

          const response = await axios.post("http://localhost:8000/api/Category/Cart",{
            "MEASURE" : "CREATE_MULTIPLE_CART",
            "ID" : data.id,
            "CATEGORY" : data.category,
            "BRAND" : data.brand,
            "TITLE" : data.title,
            "RATING" : data.rating,
            "RATING_COUNT" : data.rating_count,
            "PRICE_INR" : data.price_inr,
            "ORIGINAL_PRICE_INR" : data.original_price_inr,
            "DISCOUNT_PERCENTAGE" : data.discount_percentage,
            "IMAGE" : data.image,
          },{
            headers : {
              Authorization : `Bearer ${AUTH_TOKEN}`
            }});
          return response;

      }catch(error){

        console.log("Error : ",error.message);
        return error.message;

      }


    }

    const callforRemoveProductFromCart = async (data) => {

      try {

          const response = await axios.post("http://localhost:8000/api/Category/Cart",{
            "MEASURE" : "REMOVE_ITEM_CART",
            "ID" : data.id,
            "CATEGORY" : data.category,
          },{
            headers : {
              Authorization : `Bearer ${AUTH_TOKEN}`
            }}
          );
          return response;

      }catch(error){

        console.log("Error : ",error.message);
        return error.message;

      }

    }

    const handleAddToCart = (ans) => {

      console.log("data : ",ans);
      callforaddProductintoCart(ans)
      .then((data) => {

        if(data == null){

        }else{

          console.log("updated Cart Response : ",data);
          setCartStatus(!cartStatus)

        }

      })

    }

    const handleRemoveToCart = (ans) => {

      console.log("data : ",ans);
      callforRemoveProductFromCart(ans)
      .then((data) => {

        if(data == null){

        }else{

          console.log("updated Cart Response : ",data);
          setCartStatus(!cartStatus)

        }

      })

    }

    useEffect(() => {

      console.log("selectedCategory?.category  : ",selectedCategory?.category);

        var api = "";
        var measure = "";

        if(selectedCategory?.category == "Ethnic Wear"){
          api = "EthnicWear";
          measure = "GET_ETHNICWEARS_LIST";
        }else if(selectedCategory?.category == "Casual Wear"){
          api = "mensWear";
          measure = "GET_MENSWEARS_LIST";
        }

        callforgetEthenicWearList(api,measure)
        .then((data) => {

          if(data == null){

          }else{

            console.log("Ethnic Wear List : ",data);
            setProductsList(data?.data?.Data);
            console.log("Ethnic Wear List : ",data?.data?.Data);
          }

        })

  

    },[selectedCategory])

    const callforgetCartList = async (data) => {

      const response = await axios.post("http://localhost:8000/api/Category/Cart",{
        "MEASURE" : "GET_CART_LIST"
      },{
          headers : {
            Authorization : `Bearer ${AUTH_TOKEN}`
      }});
      return response;

    }

    useEffect(() => {

      callforgetCartList()
      .then((data) => {

        if(data == null){

        }else{

          console.log("cart list : ",data);
          setCartList(data?.data?.Data);
        }

      })

    },[cartStatus])

    useEffect(() => {
        console.log("selectedCategory : ",selectedCategory);
    },[selectedCategory])

    useEffect(() => {
      console.log("productsList : ",productsList);
    },[productsList])

    useEffect(() => {
      console.log("cartList : ",cartList);
    },[cartList])

  return (
    <div>
      
      <Box>

        <Grid container >
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2} >

          </Grid>
          <Grid item xl={10} lg={10} md={10} sm={2} xs={2} >

            <Grid container sx={{my:3,mx:3,textAlign:"center"}} >
              {productsList.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={product._id}  >
                  <Box sx={{mx:2}}   >
                    <Card sx={{ maxWidth: '100%',minWidth: '100%', borderRadius: 0, boxShadow: 'none', position: 'relative', '&:hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.1)' } }} 
                     
                    >
                      
                      {/* Product Image & Floating Rating Badge */}
                      <Box sx={{ position: 'relative' }}>

                        <img
                          onClick={() => selectedItemDetails(product)}
                          src={product?.image || "https://via.placeholder.com/210x280?text=No+Image"}
                          alt={product?.title}
                          style={{
                              margin: "15px 10px",
                              minwidth: "240px",
                              maxWidth : "240px",
                              minHeight: "270px",
                              maxHeight: "270px",
                              cursor: "pointer"
                          }}
                      />
                        
                        {/* Rating Badge Overlay (Only rendered if rating > 0) */}
                        {product.rating > 0 && (
                          <Box 
                            onClick={() => selectedItemDetails(product)}
                          sx={{
                            position: 'absolute',
                            bottom: 8,
                            left: 8,
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            borderRadius: '4px',
                            px: 0.8,
                            py: 0.2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2px',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                          }}>
                            <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#000' }}>
                              {product.rating}
                            </Typography>
                            <StarIcon sx={{ fontSize: 12, color: '#14958f' }} />
                            <Box component="span" sx={{ mx: 0.5, color: '#7e818c', fontSize: '10px' }}>|</Box>
                            <Typography variant="caption" sx={{ color: '#7e818c', fontSize: '10px', fontWeight: '500' }}>
                              {product.rating_count}
                            </Typography>
                          </Box>
                        )}
                      </Box>

                      {/* Product Metadata Info */}
                      <CardContent sx={{ pt: 1, px: 0.5, pb: '8px !important' }} onClick={() => selectedItemDetails(product)} >
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#282c3f', lineHeight: 1.2, mb: 0.3, fontFamily: 'sans-serif' }}>
                          {product.brand}
                        </Typography>
                        
                        <Typography variant="body2" noWrap sx={{ color: '#535665', mb: 0.5, fontSize: '13px' }}>
                          {product.title}
                        </Typography>
                        
                        {/* Pricing Blocks */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}  >
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#282c3f', fontSize: '14px' }}>
                            Rs. {product.price_inr}
                          </Typography>
                          
                          {product.original_price_inr > product.price_inr && (
                            <>
                              <Typography variant="body2" sx={{ textDecoration: 'line-through', color: '#7e818c', fontSize: '12px' }}>
                                Rs. {product.original_price_inr}
                              </Typography>
                              <Typography variant="body2" sx={{ color: '#ff905a', fontWeight: 600, fontSize: '12px' }}>
                                ({product.discount_percentage}% OFF)
                              </Typography>
                            </>
                          )}
                        </Box>
                      </CardContent>

                      <Box sx={{ px: 0.5, pb: 1.5 }}>

                        {cartList.some((x) => x.id === product.id && x.category === product.category) ? 
                        
                          <Button 
                            fullWidth
                            variant="outlined" 
                            startIcon={<ShoppingBagIcon sx={{ fontSize: '16px !important' }} />}
                            onClick={() => handleRemoveToCart(product)}
                            sx={{
                              borderRadius: '4px',
                              borderColor: '#ff3f6c',
                              color: '#ff3f6c',
                              fontSize: '12px',
                              fontWeight: 'bold',
                              py: 0.8,
                              textTransform: 'uppercase',
                              '&:hover': {
                                backgroundColor: '#ff3f6c',
                                color: '#fff',
                                borderColor: '#ff3f6c',
                              }
                            }}
                          >
                            Remove from Cart
                          </Button> 

                        :
                        
                          <Button 
                            fullWidth
                            variant="outlined" 
                            startIcon={<ShoppingBagIcon sx={{ fontSize: '16px !important' }} />}
                            onClick={() => handleAddToCart(product)}
                            sx={{
                              borderRadius: '4px',
                              borderColor: '#ff3f6c',
                              color: '#ff3f6c',
                              fontSize: '12px',
                              fontWeight: 'bold',
                              py: 0.8,
                              textTransform: 'uppercase',
                              '&:hover': {
                                backgroundColor: '#ff3f6c',
                                color: '#fff',
                                borderColor: '#ff3f6c',
                              }
                            }}
                          >
                            Add to Cart
                          </Button> 

                        }

                      </Box>

                    </Card>
                  </Box>
                </Grid>
              ))}
            </Grid>

          </Grid>
        </Grid>

      </Box>

    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        selectedCategory : state.SELECTED_CATEGORY.SELECTED_CATEGORY,
        AUTH_TOKEN : state.TOKEN.TOKEN,
        USER_DETAILS : state.USERDETAILS.USERDETAILS
    }
}

const mapDispatchToProps = (dispatch) => ({
  callforSelectedItemDetails : (data) => dispatch(selectedItemsDetailsAction(data)),
});

export default React.memo(
  connect(mapStateToProps,mapDispatchToProps)(Products)
);
