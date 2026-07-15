import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Typography, Radio, RadioGroup, FormControlLabel, FormControl, Button, Divider, Paper, TextField } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import axios from 'axios';


const PaymentView = ({selectedItemDetails,AUTH_TOKEN}) => {

const [addresses,setAddresses] = useState([]);
const [paymentMethod, setPaymentMethod] = useState('card');

  // Static platform calculations based on typical checkout parameters
  const deliveryFee = 0; // Free delivery threshold
  const totalAmount = selectedItemDetails.price_inr + deliveryFee;
  const totalSavings = selectedItemDetails.original_price_inr - selectedItemDetails.price_inr;

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePlaceOrder = () => {
    alert(`Order placed successfully for Rs. ${totalAmount} using ${paymentMethod.toUpperCase()}!`);
  };

    useEffect(() => {
        console.log("selectedItemDetails : ",selectedItemDetails);
    },[selectedItemDetails])

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

              console.log("Address List Response : ",data);
              setAddresses(data?.data?.Data);

          }

      })
      
  },[])

  useState(() => {
    console.log("addresses : ",addresses);
  },[addresses])

  return (
    <div>
        <Container maxWidth="lg" sx={{ py: 6, fontFamily: 'sans-serif' }}>

            {/* Page Title Header */}
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 4, letterSpacing: 0.5, textTransform: 'uppercase' }}>
                Checkout & Payment
            </Typography>

            <Grid container spacing={4}>
                {/* Left Side Panel: Payment Selection & Forms */}
                <Grid item xs={7} md={7}>
                    <Paper variant="outlined" sx={{ p: 3, borderRadius: '4px', mb: 3 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#282c3f' }}>
                        Select Payment Method
                        </Typography>
                        
                        <FormControl sx={{ width: '100%' }}>
                            <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
                                
                                {/* Credit/Debit Card Option */}
                                <Box sx={{ border: '1px solid #eaeaec', p: 1.5, mb: 2, borderRadius: '4px' }}>
                                <FormControlLabel 
                                    value="card" 
                                    control={<Radio sx={{ '&.Mui-checked': { color: '#ff3f6c' } }} />} 
                                    label={
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <CreditCardIcon sx={{ color: '#535665' }} />
                                        <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>Credit / Debit Card</Typography>
                                    </Box>
                                    } 
                                />
                                {paymentMethod === 'card' && (
                                    <Box sx={{ mt: 2, px: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <TextField fullWidth size="small" label="Card Number" placeholder="XXXX XXXX XXXX XXXX" />
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <TextField fullWidth size="small" label="Expiry Date" placeholder="MM/YY" />
                                        <TextField fullWidth size="small" label="CVV" placeholder="XXX" type="password" />
                                    </Box>
                                    <TextField fullWidth size="small" label="Name on Card" />
                                    </Box>
                                )}
                                </Box>

                                {/* Net Banking Option */}
                                <Box sx={{ border: '1px solid #eaeaec', p: 1.5, mb: 2, borderRadius: '4px' }}>
                                <FormControlLabel 
                                    value="netbanking" 
                                    control={<Radio sx={{ '&.Mui-checked': { color: '#ff3f6c' } }} />} 
                                    label={
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <AccountBalanceIcon sx={{ color: '#535665' }} />
                                        <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>Net Banking</Typography>
                                    </Box>
                                    } 
                                />
                                </Box>

                                {/* UPI / Wallets Option */}
                                <Box sx={{ border: '1px solid #eaeaec', p: 1.5, mb: 2, borderRadius: '4px' }}>
                                <FormControlLabel 
                                    value="upi" 
                                    control={<Radio sx={{ '&.Mui-checked': { color: '#ff3f6c' } }} />} 
                                    label={
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <AccountBalanceWalletIcon sx={{ color: '#535665' }} />
                                        <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>UPI / Google Pay / PhonePe</Typography>
                                    </Box>
                                    } 
                                />
                                </Box>

                                {/* Cash on Delivery Option */}
                                <Box sx={{ border: '1px solid #eaeaec', p: 1.5, borderRadius: '4px' }}>
                                <FormControlLabel 
                                    value="cod" 
                                    control={<Radio sx={{ '&.Mui-checked': { color: '#ff3f6c' } }} />} 
                                    label={
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <LocalShippingIcon sx={{ color: '#535665' }} />
                                        <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>Cash On Delivery (COD)</Typography>
                                    </Box>
                                    } 
                                />
                                </Box>

                            </RadioGroup>
                        </FormControl>
                    </Paper>
                </Grid>

                {/* Right Side Panel: Sticky Bill & Product Summary Summary */}
                <Grid item xs={5} md={5}>
                    <Box sx={{ position: 'sticky', top: 24 }}>
                        <Paper variant="outlined" sx={{ p: 3, borderRadius: '4px' }}>
                        
                        {/* Mini Item Description Header */}
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#7e818c', textTransform: 'uppercase', mb: 2 }}>
                            Order Summary
                        </Typography>
                        
                        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                            <Box 
                            component="img"
                            src={selectedItemDetails.image}
                            alt={selectedItemDetails.title}
                            sx={{ width: 64, height: 84, objectFit: 'cover', borderRadius: '2px', border: '1px solid #eaeaec' }}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#282c3f' }}>
                                {selectedItemDetails.brand}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#535665', fontSize: '13px', mb: 0.5 }}>
                                {selectedItemDetails.title}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#7e818c' }}>
                                Qty: 1 | Size: M
                            </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ mb: 2 }} />

                        {/* Price Details Block mirroring formatting from image_1bf264.png */}
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#282c3f', textTransform: 'uppercase', mb: 2 }}>
                            Price Details (1 Item)
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
                            <Typography variant="body2" sx={{ color: '#282c3f', flexGrow: 1 }}>Total MRP</Typography>
                            <Typography variant="body2" sx={{ color: '#282c3f' }}>Rs. {selectedItemDetails.original_price_inr}</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
                            <Typography variant="body2" sx={{ color: '#282c3f', flexGrow: 1 }}>Discount on MRP</Typography>
                            <Typography variant="body2" sx={{ color: '#03a685' }}>-Rs. {totalSavings}</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
                            <Typography variant="body2" sx={{ color: '#282c3f', flexGrow: 1 }}>Convenience / Delivery Fee</Typography>
                            <Typography variant="body2" sx={{ color: '#03a685' }}>
                                {deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}`}
                            </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        {/* Final Amount Owed */}
                        <Box sx={{ display: 'flex', justifyContent: 'between', alignItems: 'center', mb: 3 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#282c3f', flexGrow: 1 }}>Total Amount</Typography>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#282c3f' }}>Rs. {totalAmount}</Typography>
                        </Box>

                        {/* Prominent Call to Action Button mapped to match primary button from image_1bf264.png */}
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={handlePlaceOrder}
                            sx={{
                            backgroundColor: '#ff3f6c',
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: '14px',
                            py: 1.5,
                            borderRadius: '2px',
                            boxShadow: 'none',
                            textTransform: 'uppercase',
                            '&:hover': {
                                backgroundColor: '#e63962',
                                boxShadow: 'none',
                            }
                            }}
                        >
                            Pay Now
                        </Button>
                        </Paper>
                    </Box>
                </Grid>

            </Grid>

        </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        selectedItemDetails : state.SELECTED_ITEM_DETAILS.SELECTED_ITEM_DETAILS,
        AUTH_TOKEN : state.TOKEN.TOKEN,
        USER_DETAILS : state.USERDETAILS.USERDETAILS
    }
}

export default connect(mapStateToProps,null)(PaymentView)
