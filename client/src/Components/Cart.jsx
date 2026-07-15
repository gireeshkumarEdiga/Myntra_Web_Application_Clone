import { useState, useEffect } from "react";
import React from 'react';
import axios from "axios";
import { Box, Grid, Card, Typography, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { selectedItemsDetailsAction } from "./Redux/Action";
import { connect } from "react-redux";
import StarIcon from '@mui/icons-material/Star';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Cart = ({callforSelectedItemDetails,AUTH_TOKEN}) => {

    const navigate = useNavigate();
    const [cartList, setCartList] = useState([]);
    const [cartStatus,setCartStatus] = useState(false);

    const callforgetCartList = async (data) => {

      const response = await axios.post("http://localhost:8000/api/Category/Cart",{
        "MEASURE" : "GET_CART_LIST"
      },{
        headers : {
          Authorization : `Bearer ${AUTH_TOKEN}`
        }
      });
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

    const selectedItemDetails = async (product) => {

      console.log("product : ",product);
      callforSelectedItemDetails(product);
      navigate("/productDetailsView");

    }

    const callforRemoveProductFromCart = async (data) => {

      try {

          const response = await axios.post("http://localhost:8000/api/Category/Cart",{
            "MEASURE" : "REMOVE_ITEM_CART",
            "ID" : data.id,
            "CATEGORY" : data.category
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
        console.log("cartList : ",cartList);
    },[cartList])

  return (
    <div>

        <Box>

            <Box sx={{textAlign:"center",my:3}} >
              <Typography>Total Price : {cartList.reduce((accumulator, currentItem) => {
                                            return accumulator + currentItem.price_inr;
                                        }, 0).toLocaleString("en-IN")}           
              </Typography>
              {cartList.length === 0 && <Typography sx={{my:5}} >There is No Items in the Cart</Typography>}
            </Box>

            <Grid container sx={{my:3,mx:3,textAlign:"center"}} >
              {cartList.length !==0 && cartList.map((product) => (
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

                      </Box>

                    </Card>
                  </Box>
                </Grid>
              ))}
            </Grid>

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

const mapDispatchtoProps = (dispatch) => ({
    callforSelectedItemDetails : (data) => dispatch(selectedItemsDetailsAction(data)),
})

export default connect(mapStateToProps,mapDispatchtoProps)(Cart)
