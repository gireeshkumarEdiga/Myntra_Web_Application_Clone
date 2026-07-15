import React from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
  Breadcrumbs,
  Link,
  TextField,
  InputAdornment,
  List,
  ListItem
} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useEffect } from 'react';
import { useState } from 'react';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import LoopIcon from '@mui/icons-material/Loop';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetailsView = ({selectedItemDetails,AUTH_TOKEN}) => {

  const navigate = useNavigate();

  const [cartList, setCartList] = useState([]);
  const [itemDetails, setItemDetails] = useState(selectedItemDetails);
  const [cartStatus,setCartStatus] = useState(false);
  const [addresses,setAddresses] = useState([])

  const paymentHandler = () => {
    navigate("/paymentView");
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

          console.log("cart list : ",data?.data?.Data);
          setCartList(data?.data?.Data);
        }

      })

    },[cartStatus])

  useEffect(() => {
    console.log("selectedItemDetails : ",selectedItemDetails);
  },[selectedItemDetails])

  useEffect(() => {
    console.log("cartList : ",cartList);
  },[cartList])

  const callforgetDefaultAddress = async (req,res) => {

      try {

          const response = await axios.post("http://localhost:8000/api/Address/address",{
              "MEASURE" : "GET_ADDRESS_LIST",
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

  useEffect(() => {

      setAddresses([])
      callforgetDefaultAddress()
      .then((data) => {

          if(data == null){

          }else{

              console.log("Address List Response : ",data?.data?.Data);
              setAddresses(data?.data?.Data?.filter((x,i) => x.isDefaultAddress === "Yes"));

          }

      })
      
  },[])

  useEffect(() => {
    console.log("addresses : ",addresses);
  },[addresses])

  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh', pt: 2, pb: 6, fontFamily: 'sans-serif' }}>
      <Container maxWidth="xl">
        
        {/* Top Navigation Breadcrumbs */}
        <Breadcrumbs 
          separator="/" 
          aria-label="breadcrumb" 
          sx={{ fontSize: '12px', mb: 3, '& .MuiBreadcrumbs-separator': { mx: 0.5, color: '#7e818c' } }}
        >
          <Link underline="hover" color="#282c3f" href="#">Home</Link>
          <Link underline="hover" color="#282c3f" href="#">Accessories</Link>
          <Link underline="hover" color="#282c3f" href="#">Women Accessories</Link>
          <Link underline="hover" color="#282c3f" href="#">Earrings</Link>
          <Link underline="hover" color="#282c3f" href="#">{itemDetails?.brand} Earrings</Link>
          <Typography color="#282c3f" sx={{ fontSize: '12px', fontWeight: 700 }}>
            More By {itemDetails?.brand}
          </Typography>
        </Breadcrumbs>

        <Grid container >
          
          {/* Left Side: Media Side-by-Side Split Showcase Grid */}
          <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={{ textAlign :"start", border:"1px solid red"  }} >

                  <Box 
                    sx={{
                    
                      border: '1px solid #f5f5f6',
                      overflow: 'hidden',
                      backgroundColor: '#f9f9f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx : 2,
                      my : 2,
                    }}
                  >
                    <Box 
                      component="img"
                      src={itemDetails?.image}
                      alt={`Product view`}
                      sx={{
                       // width: '100%',
                        height: 'auto',
                        aspectRatio: '3/4',
                        objectFit: 'cover',
                        transition: 'transform 0.2s ease',
                        '&:hover': {
                          transform: 'scale(1.02)'
                        }
                      }}
                    />
                  </Box>

          </Grid>

          {/* Right Side: Informational Purchase Matrix Container */}
          <Grid item xs={9} sm={9} md={9} lg={9} xl={9} sx={{ textAlign :"start",border:"1px solid red" }}>

              <Box sx={{my:2, mx:2}} >

                  {/* Title Section */}
                  <Typography variant="h5" sx={{ fontWeight: 500, color: '#282c3f', mb: 0.5 }}>
                    {itemDetails.brand}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 400, color: '#535665', fontSize: '18px', mb: 2 }}>
                    {itemDetails.title}
                  </Typography>

                  <Divider sx={{ mb: 2.5 }} />

                  {/* Price Section */}
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 0.5 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#282c3f' }}>
                      ₹{itemDetails.price_inr}
                    </Typography>
                    <Typography variant="body1" sx={{ textDecoration: 'line-through', color: '#7e818c' }}>
                      MRP ₹{itemDetails.original_price_inr}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#ff905a', fontWeight: 700, fontSize: '18px' }}>
                      ({itemDetails.discount_percentage}% OFF)
                    </Typography>
                  </Box>
                  
                  <Typography variant="body2" sx={{ color: '#03a685', fontWeight: 700, fontSize: '12px', mb: 3 }}>
                    inclusive of all taxes
                  </Typography>

                 
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#282c3f', mb: 1.5, textTransform: 'uppercase', fontSize: '14px' }}>
                    Select Size
                  </Typography>
                  <Box sx={{ mb: 4 }}>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: '20px',
                        borderColor: '#ff3f6c',
                        color: '#ff3f6c',
                        fontWeight: 700,
                        fontSize: '12px',
                        px: 2.5,
                        py: 0.6,
                        textTransform: 'capitalize',
                        backgroundColor: 'rgba(255, 63, 108, 0.03)',
                        '&:hover': {
                          borderColor: '#ff3f6c',
                          backgroundColor: 'rgba(255, 63, 108, 0.08)',
                        }
                      }}
                    >
                      Onesize
                    </Button>
                  </Box>

                  
                  <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                    {cartList.some((x) => x.id === itemDetails.id && x.category === itemDetails.category) ? 
                    
                    <Button
                      variant="contained"
                      // startIcon={<ShoppingBagIcon />}
                     // onClick={() => handleAddToCart(itemDetails)}
                      startIcon={<FavoriteBorderIcon />}
                      sx={{
                        flex: 1.3,
                        backgroundColor: '#ff3f6c',
                        color: '#fff',
                        fontWeight: 700,
                        py: 1.6,
                        borderRadius: '4px',
                        boxShadow: 'none',
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        '&:hover': {
                          backgroundColor: '#e63962',
                          boxShadow: 'none',
                        }
                      }}
                    >
                      Already in Cart
                    </Button> 
                    :
                    <Button
                      variant="contained"
                      // startIcon={<ShoppingBagIcon />}
                      onClick={() => handleAddToCart(itemDetails)}
                      startIcon={<FavoriteBorderIcon />}
                      sx={{
                        flex: 1.3,
                        backgroundColor: '#ff3f6c',
                        color: '#fff',
                        fontWeight: 700,
                        py: 1.6,
                        borderRadius: '4px',
                        boxShadow: 'none',
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        '&:hover': {
                          backgroundColor: '#e63962',
                          boxShadow: 'none',
                        }
                      }}
                    >
                      Add To Cart
                    </Button>  
                    }

                    <Button
                      variant="outlined"
                      // startIcon={<FavoriteBorderIcon />}
                      onClick={() => paymentHandler()}
                      sx={{
                        flex: 1,
                        borderColor: '#d4d5d9',
                        color: '#282c3f',
                        fontWeight: 700,
                        py: 1.6,
                        borderRadius: '4px',
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        '&:hover': {
                          borderColor: '#282c3f',
                          backgroundColor: 'transparent'
                        }
                      }}
                    >
                      Payment
                    </Button>
                  </Box>

             
                  <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: '#282c3f' }}>
                        ₹{itemDetails.price_inr}
                      </Typography>
                      <Typography variant="caption" sx={{ textDecoration: 'line-through', color: '#7e818c' }}>
                        ₹{itemDetails.original_price_inr}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#ff905a', fontWeight: 600 }}>
                        ({itemDetails.discount_percentage}% OFF)
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#282c3f' }}>
                      Get it by <Box component="span" sx={{ fontWeight: 700 }}>{itemDetails.deliveryDate} - {itemDetails.pincode}</Box>
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#282c3f' }}>
                      Seller: <Box component="span" sx={{ fontWeight: 700, color: '#ff3f6c' }}>{itemDetails.seller}</Box>
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 3 }} />

                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, letterSpacing: '0.5px' }}>
                        DELIVERY OPTIONS
                      </Typography>
                      <LocalShippingOutlinedIcon sx={{ fontSize: 20 }} />
                    </Box>

                    <Box sx={{ maxWidth: '320px', mb: 3 }}>
                      <TextField
                        fullWidth
                        size="small"
                        value={addresses?.[0]?.["name"]}
                        disabled
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CheckCircleIcon sx={{ color: '#03a685', fontSize: 18 }} />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Button sx={{ color: '#ff3f6c', fontWeight: 700, fontSize: '12px', minWidth: 'auto', p: 0 }}>
                                CHANGE
                              </Button>
                            </InputAdornment>
                          ),
                          sx: {
                            borderRadius: '4px',
                            fontSize: '14px',
                            fontWeight: 700,
                            color: '#282c3f',
                            backgroundColor: '#fff',
                            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#d4d5d9' }
                          }
                        }}
                      />
                    </Box>

                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <LocalShippingOutlinedIcon sx={{ color: '#535665', fontSize: 26 }} />
                        <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '15px' }}>
                          Get it by Sun, Jul 12
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <PaymentsOutlinedIcon sx={{ color: '#535665', fontSize: 26 }} />
                        <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '15px' }}>
                          Pay on delivery not available
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'space-between', width: '100%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <LoopIcon sx={{ color: '#03a685', fontSize: 26 }} />
                          <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '15px' }}>
                            Easy 7 days return available
                          </Typography>
                        </Box>
                        <Button 
                          endIcon={<ChevronRightIcon sx={{ fontSize: '16px !important' }} />}
                          sx={{ color: '#ff3f6c', fontWeight: 700, fontSize: '13px', p: 0 }}
                        >
                          MORE INFO
                        </Button>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CancelOutlinedIcon sx={{ color: '#ff3f6c', fontSize: 26 }} />
                        <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '15px' }}>
                          Exchange not available
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" sx={{ color: '#535665', mt: 2, fontSize: '14px' }}>
                      100% Original Products
                    </Typography>
                  </Box>

             
                  <Box sx={{ mb: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, letterSpacing: '0.5px' }}>
                          BEST OFFERS
                        </Typography>
                        <LocalOfferOutlinedIcon sx={{ fontSize: 18 }} />
                      </Box>

                      <Typography variant="body1" sx={{ fontWeight: 700, mb: 1, fontSize: '15px' }}>
                        Best Price: <Box component="span" sx={{ color: '#ff905a' }}>Rs. 345</Box>
                      </Typography>

                      
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pl: 1 }}>
                        
                        
                        <Box>
                          <List sx={{ p: 0, listStyleType: 'disc', pl: 2, '& .MuiListItem-root': { display: 'list-item', p: 0, mb: 0.5 } }}>
                            <ListItem><Typography variant="body2" sx={{ color: '#282c3f', fontSize: '14px' }}>Coupon Discount: 15% off upto Rs. 150 (check cart for final savings)</Typography></ListItem>
                            <ListItem><Typography variant="body2" sx={{ color: '#282c3f', fontSize: '14px' }}>Applicable on: Orders above Rs. 100</Typography></ListItem>
                            <ListItem><Typography variant="body2" sx={{ color: '#282c3f', fontSize: '14px' }}>Coupon code: <Box component="span" sx={{ fontWeight: 700 }}>FWDNA15</Box></Typography></ListItem>
                          </List>
                          <Button sx={{ color: '#ff3f6c', fontWeight: 700, fontSize: '13px', p: 0, mt: 0.5, textTransform: 'capitalize' }}>
                            View Eligible Products
                          </Button>
                        </Box>

                        
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '14px', color: '#282c3f' }}>
                            10% Instant Discount on BOBCARD Credit Card
                          </Typography>
                          <List sx={{ p: 0, listStyleType: 'disc', pl: 2, '& .MuiListItem-root': { display: 'list-item', p: 0 } }}>
                            <ListItem><Typography variant="body2" sx={{ color: '#535665', fontSize: '13px' }}>Min Spend ₹3,500 Max Discount ₹1,000</Typography></ListItem>
                          </List>
                          <Button sx={{ color: '#ff3f6c', fontWeight: 700, fontSize: '12px', p: 0, textTransform: 'capitalize' }}>Terms & Condition</Button>
                        </Box>

                       
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '14px', color: '#282c3f' }}>
                            10% Instant Discount on BOBCARD Credit Card EMI
                          </Typography>
                          <List sx={{ p: 0, listStyleType: 'disc', pl: 2, '& .MuiListItem-root': { display: 'list-item', p: 0 } }}>
                            <ListItem><Typography variant="body2" sx={{ color: '#535665', fontSize: '13px' }}>Min Spend ₹3,500 Max Discount ₹1,200</Typography></ListItem>
                          </List>
                          <Button sx={{ color: '#ff3f6c', fontWeight: 700, fontSize: '12px', p: 0, textTransform: 'capitalize' }}>Terms & Condition</Button>
                        </Box>

                        
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '14px', color: '#282c3f' }}>
                            10% Instant Discount on Kotak Bank Credit Card
                          </Typography>
                          <List sx={{ p: 0, listStyleType: 'disc', pl: 2, '& .MuiListItem-root': { display: 'list-item', p: 0 } }}>
                            <ListItem><Typography variant="body2" sx={{ color: '#535665', fontSize: '13px' }}>Min Spend ₹3,500 Max Discount ₹1,000</Typography></ListItem>
                          </List>
                          <Button sx={{ color: '#ff3f6c', fontWeight: 700, fontSize: '12px', p: 0, textTransform: 'capitalize' }}>Terms & Condition</Button>
                        </Box>

                       
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '14px', color: '#282c3f' }}>
                            10% Instant Discount on Kotak Bank Credit Card EMI
                          </Typography>
                          <List sx={{ p: 0, listStyleType: 'disc', pl: 2, '& .MuiListItem-root': { display: 'list-item', p: 0 } }}>
                            <ListItem><Typography variant="body2" sx={{ color: '#535665', fontSize: '13px' }}>Min Spend ₹3,500 Max Discount ₹1,200</Typography></ListItem>
                          </List>
                          <Button sx={{ color: '#ff3f6c', fontWeight: 700, fontSize: '12px', p: 0, textTransform: 'capitalize' }}>Terms & Condition</Button>
                        </Box>

                        
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '14px', color: '#282c3f' }}>
                            Flat 7.5% Cashback on Flipkart Axis Bank & SBI Credit Cards.
                          </Typography>
                          <List sx={{ p: 0, listStyleType: 'disc', pl: 2, '& .MuiListItem-root': { display: 'list-item', p: 0 } }}>
                            <ListItem><Typography variant="body2" sx={{ color: '#535665', fontSize: '13px' }}>Flat 7.5% Cashback on Flipkart Axis Bank & SBI Credit Cards on a min spend of ₹100</Typography></ListItem>
                          </List>
                          <Button sx={{ color: '#ff3f6c', fontWeight: 700, fontSize: '12px', p: 0, textTransform: 'capitalize' }}>Terms & Condition</Button>
                        </Box>
                      </Box>
                  </Box>

                  <Divider sx={{ my: 3 }} />

                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, letterSpacing: '0.5px' }}>
                        PRODUCT DETAILS
                      </Typography>
                      <AssignmentOutlinedIcon sx={{ fontSize: 18 }} />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, color: '#282c3f', fontSize: '15px', mb: 3 }}>
                      <Typography variant="body1">Purple and white geometric drop earrings, gold-plated, has artificial stones</Typography>
                      <Typography variant="body1">Secured with a post and back</Typography>
                      <Typography variant="body1">Warranty: 6 months</Typography>
                      <Typography variant="body1">Warranty provided by brand owner/manufacturer</Typography>
                    </Box>

                  
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, fontSize: '15px' }}>Size & Fit</Typography>
                      <Typography variant="body1">Earring Length - 7cm</Typography>
                    </Box>

                   
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, fontSize: '15px' }}>Material & Care</Typography>
                      <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                        Wipe your jewellery with a soft cloth after every use Always store your jewellery in a flat box to avoid accidental scratches Keep sprays and perfumes away from your jewellery Do not soak your jewellery in water Clean your jewellery using a soft brush, dipped in jewellery cleaning solution only
                      </Typography>
                    </Box>

                   
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, fontSize: '15px' }}>Specifications</Typography>
                    <Grid container spacing={3} sx={{ mb: 2 }}>
                      {[
                        { label: 'Shape', val: 'Geometric' },
                        { label: 'Type', val: 'Drop Earrings' },
                        { label: 'Base Metal', val: 'Alloy' },
                        { label: 'Plating', val: 'Gold-Plated' },
                        { label: 'Closure', val: 'Post and Back' },
                        { label: 'Multipack Set', val: 'Single' },
                        { label: 'Warranty', val: '6 months' },
                        { label: 'Number of Items', val: '2' },
                      ].map((spec, i) => (
                        <Grid item xs={6} key={i}>
                          <Box sx={{ borderBottom: '1px solid #eaeaec', pb: 1 }}>
                            <Typography variant="caption" sx={{ color: '#7e818c', fontSize: '12px' }}>{spec.label}</Typography>
                            <Typography variant="body2" sx={{ color: '#282c3f', fontWeight: 500, fontSize: '14px', mt: 0.5 }}>{spec.val}</Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>

                    <Button sx={{ color: '#ff3f6c', fontWeight: 700, fontSize: '14px', p: 0, textTransform: 'capitalize' }}>
                      See More
                    </Button>
                  </Box>

                  <Divider sx={{ my: 3 }} />

               
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                      Customer Reviews (1)
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 3 }}>
                     
                      <Box sx={{ 
                        bgcolor: '#ff4949', 
                        color: '#fff', 
                        borderRadius: '3px', 
                        px: 0.6, 
                        py: 0.1, 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '2px',
                        fontSize: '11px',
                        fontWeight: 700
                      }}>
                        1 <StarIcon sx={{ fontSize: 11 }} />
                      </Box>
                      
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#282c3f', fontSize: '14px', mb: 1 }}>
                          Poor quality can break easily
                        </Typography>
                        
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="caption" sx={{ color: '#7e818c' }}>
                            Sayalii Baid <Box component="span" sx={{ mx: 1 }}>|</Box> 17 June 2026
                          </Typography>
                          
                          <Box sx={{ display: 'flex', gap: 3, color: '#7e818c' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer' }}>
                              <ThumbUpOutlinedIcon sx={{ fontSize: 16 }} />
                              <Typography variant="caption">0</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer' }}>
                              <ThumbDownOutlinedIcon sx={{ fontSize: 16 }} />
                              <Typography variant="caption">0</Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Divider sx={{ my: 3 }} />

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography variant="body2" sx={{ color: '#282c3f', fontSize: '14px' }}>
                      Product Code: <Box component="span" sx={{ fontWeight: 700 }}>38620590</Box>
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#282c3f', fontSize: '14px' }}>
                      Seller: <Box component="span" sx={{ fontWeight: 700, color: '#ff3f6c' }}>ASMITA CREATION</Box>
                    </Typography>
                    <Button sx={{ color: '#ff3f6c', fontWeight: 700, fontSize: '13px', p: 0, width: 'fit-content', textTransform: 'capitalize' }}>
                      View Supplier Information
                    </Button>
                  </Box>

              </Box>

          </Grid>

        </Grid>

      </Container>
    </Box>
  );

}


const mapStateToProps = (state) => {
    return {
        selectedItemDetails : state.SELECTED_ITEM_DETAILS.SELECTED_ITEM_DETAILS,
        AUTH_TOKEN : state.TOKEN.TOKEN,
        USER_DETAILS : state.USERDETAILS.USERDETAILS
    }
}

export default connect(mapStateToProps,null)(ProductDetailsView)