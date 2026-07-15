import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Modal,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  IconButton,
  Divider,
  Chip
} from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import CloseIcon from "@mui/icons-material/Close";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import WorkOutlineIcon from "@mui/icons-material/WorkOutlineDstamped";

import { 
  Add as AddIcon, 
  Close as CloseIcon, 
  HomeOutlined as HomeOutlinedIcon
} from "@mui/icons-material";
  import axios from "axios";
  import { connect } from "react-redux";

const AddressPage = ({AUTH_TOKEN}) => {

  // --- STATE ---
  const [addresses, setAddresses] = useState([]);
  const [addressStatus, setAddressStatus] = useState(false);
  const [isDetailsEdit, setIsDetailsEdit] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pincode: "",
    street: "",
    locality: "",
    city: "",
    state: "",
    addressType: "Home",
    isDefaultAddress : "Yes"
  });

  // --- HANDLERS ---
  const handleOpen = () => setOpenModal(true);

  const handleClose = () => {
    setOpenModal(false);
    setFormData({ name: "", mobile: "", pincode: "", street: "", locality: "", city: "", state: "", addressType: "Home",isDefaultAddress : "Yes"});
  };

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    console.log("name : ",name);
    console.log("value : ",value);
    // let subValue = ""
    // if(name === "isDefaultAddress" && value === "Yes"){
    //     subValue = true
    // }else if(name === "isDefaultAddress" && value === "No"){
    //     subValue = false
    // }else{
    //   subValue = value;
    // }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const callforaddAddressList = async () => {

      try {

          const response = await axios.post("http://localhost:8000/api/Address/address",{
            "MEASURE" : "CREATE_ADDRESS",
            "id" : addresses?.length + 1,
            "name" : formData.name,
            "mobile" : formData.mobile,
            "pincode" : formData.pincode,
            "street" : formData.street,
            "locality" : formData.locality,
            "city" : formData.city,
            "state" : formData.state,
            "addressType" : formData.addressType,
            "isDefaultAddress" : formData.isDefaultAddress
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

  const handleAddress = () => {

      callforaddAddressList()
      .then((data) => {

          if(data == null){

          }else{

              console.log("updated Address Response : ",data);
              handleClose();
              setAddressStatus(!addressStatus)

          }

      })

  }

  const handleSubmit = () => {
      handleAddress()
  };

  const callforDeleteAddressFromList = async (id) => {

      try {

          const response = await axios.post("http://localhost:8000/api/Address/address",
            {
              "MEASURE" : "DELETE_ADDRESS_FROM_LIST",
              "id" : id,
            },
            {
            headers : {
                Authorization : `Bearer ${AUTH_TOKEN}`
              }
            }
          );
          return response;

      }catch(error){

          console.log("Error : ",error.message);
          return error.message;

      }

  }

  const handleDelete = (id) => {

      callforDeleteAddressFromList(id)
      .then((data) => {

        if(data == null){

        }else{

          console.log("");
          setAddressStatus(!addressStatus)

        }

      })

  };

  const handleEdit = (address) => {

    setIsDetailsEdit(true);
    setFormData({ id : address.id, name: address.name, mobile: address.mobile, pincode:address.pincode, street: address.street, locality: address.locality, city: address.city, state: address.state, addressType: address.addressType, isDefaultAddress : address.isDefaultAddress});
    handleOpen();
  }

  const callforEditAddressList = async () => {

      try {

          const response = await axios.post("http://localhost:8000/api/Address/address",{
            "MEASURE" : "UPDATE_ADDRESS",
            "id" : formData.id,
            "name" : formData.name,
            "mobile" : formData.mobile,
            "pincode" : formData.pincode,
            "street" : formData.street,
            "locality" : formData.locality,
            "city" : formData.city,
            "state" : formData.state,
            "addressType" : formData.addressType,
            "isDefaultAddress" : formData.isDefaultAddress
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

  const handleEditSubmit = () => {

    setIsDetailsEdit(false);

      callforEditAddressList()
      .then((data) => {

          if(data == null){

          }else{

              console.log("Edit Address Response : ",data);
              handleClose();
              setAddressStatus(!addressStatus)

          }

      })

  }

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
      console.log("addressStatus : ",addressStatus);

      setAddresses([])
      callforgetDefaultAddress()
      .then((data) => {

          if(data == null){

          }else{

              console.log("Address List Response : ",data);
              setAddresses(data?.data?.Data);

          }

      })
      
  },[addressStatus])


  useEffect(() => {
    console.log("AUTH_TOKEN : ",AUTH_TOKEN);
  },[AUTH_TOKEN])

  useEffect(() => {
    console.log("formData : ",formData);
  },[formData])

  return (
    <Box sx={{ maxWidth: "100%", mx: "auto", p: { xs: 2, md: 4 }, fontFamily: "sans-serif" }}>
      
      {/* HEADER SECTION */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: "#282c3f" }}>
          Saved Addresses ({addresses?.length})
        </Typography>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={handleOpen}
          sx={{
            borderColor: "#ff3f6c",
            color: "#ff3f6c",
            fontWeight: 700,
            fontSize: "13px",
            px: 2,
            py: 1,
            "&:hover": { borderColor: "#e2355e", backgroundColor: "rgba(255, 63, 108, 0.04)" }
          }}
        >
          Add New Address
        </Button>
      </Box>

      {/* ADDRESS LIST GRID */}
      <Grid container spacing={3}>
        {addresses.length !== 0 && addresses.map((addr) => (
          <Grid item xs={12} md={3} lg={3} xl={3} key={addr.id}>
            <Card 
              elevation={0} 
              sx={{ 
                border: "1px solid #eaeaec", 
                borderRadius: "4px",
                position: "relative",
                "&:hover": { boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }
              }}
            >
              <CardContent sx={{ p: 3 }}>
                {/* Name & Type Badge */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                  <Typography sx={{ fontWeight: 700, color: "#282c3f", fontSize: "15px" }}>
                    {addr.name}
                  </Typography>
                  <Chip 
                    icon={addr.addressType === "Home" ? 
                        <HomeOutlinedIcon style={{ fontSize: '14px' }} /> 
                    :   
                        <HomeOutlinedIcon style={{ fontSize: '14px' }} />}
                    label={addr.addressType.toUpperCase()} 
                    size="small" 
                    sx={{ backgroundColor: "#f5f5f6", color: "#535766", fontWeight: 700, fontSize: "10px", height: "20px" }}
                  />
                  {addr.isDefaultAddress === "Yes" && (
                    <Chip label="DEFAULT" size="small" color="success" sx={{ fontWeight: 700, fontSize: "10px", height: "20px", borderRadius: "4px" }} />
                  )}
                </Box>

                {/* Full Address Block */}
                <Typography variant="body2" sx={{ color: "#424553", lineHeight: 1.6, mb: 1 }}>
                  {addr.street}, {addr.locality}
                </Typography>
                <Typography variant="body2" sx={{ color: "#424553", fontWeight: 500, mb: 2 }}>
                  {addr.city}, {addr.state} - {addr.pincode}
                </Typography>

                {/* Mobile Info */}
                <Typography variant="body2" sx={{ color: "#424553", mb: 3 }}>
                  <Box component="span" sx={{ color: "#7e818c" }}>Mobile: </Box>
                  <strong>{addr.mobile}</strong>
                </Typography>

                <Divider sx={{ mx: -3, mb: 2 }} />

                {/* Card Management Controls */}
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button size="small" 
                  onClick={() => handleEdit(addr)}
                  sx={{ color: "#535766", fontWeight: 700, p: 0, minWidth: "auto" }}>
                    EDIT
                  </Button>
                  <Divider orientation="vertical" flexItem />
                  <Button 
                    size="small" 
                    onClick={() => handleDelete(addr.id)}
                    sx={{ color: "#535766", fontWeight: 700, p: 0, minWidth: "auto" }}
                  >
                    REMOVE
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* -----------------------------------------------------------------
          ADDRESS CREATION MODAL DIALOG
         ----------------------------------------------------------------- */}
      <Modal open={openModal} onClose={handleClose} aria-labelledby="add-address-modal">
        <Box 
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "500px" },
            maxHeight: "90vh",
            overflowY: "auto",
            backgroundColor: "#fff",
            boxShadow: 24,
            borderRadius: "4px",
            p: 4
          }}
        >
          {/* Modal Top Bar */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: "#282c3f" }}>
              ADD NEW ADDRESS
            </Typography>
            <IconButton onClick={handleClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Creation Input Fields */}
          <form >
            <Grid container spacing={2.5}>
              <Grid item xs={12}>
                <TextField required fullWidth label="Contact Name" name="name" value={formData.name} onChange={handleInputChange} variant="outlined" size="small" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleInputChange} variant="outlined" size="small" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth label="Address (House No, Building, Street)" name="street" value={formData.street} onChange={handleInputChange} variant="outlined" size="small" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth label="Locality / Area / Colony" name="locality" value={formData.locality} onChange={handleInputChange} variant="outlined" size="small" />
              </Grid>
              <Grid item xs={6}>
                <TextField required fullWidth label="Pincode" name="pincode" value={formData.pincode} onChange={handleInputChange} variant="outlined" size="small" />
              </Grid>
              <Grid item xs={6}>
                <TextField required fullWidth label="City" name="city" value={formData.city} onChange={handleInputChange} variant="outlined" size="small" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth label="State" name="state" value={formData.state} onChange={handleInputChange} variant="outlined" size="small" />
              </Grid>

              <Grid container >
                {/* Type Selectors (Radio Segment Options) */}
                <Grid item xs={6}>
                  <FormControl component="fieldset" sx={{ mt: 1 }}>
                    <FormLabel component="legend" sx={{ fontSize: "12px", fontWeight: 700, color: "#7e818c", mb: 1 }}>
                      SAVE ADDRESS AS
                    </FormLabel>
                    <RadioGroup row name="addressType" value={formData.addressType} onChange={handleInputChange}>
                      <FormControlLabel value="Home" control={<Radio color="secondary" />} label="Home" />
                      <FormControlLabel value="Work" control={<Radio color="secondary" />} label="Work" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                  <Grid item xs={6}>
                  <FormControl component="fieldset" sx={{ mt: 1 }}>
                    <FormLabel component="legend" sx={{ fontSize: "12px", fontWeight: 700, color: "#7e818c", mb: 1 }}>
                      is Default Address ?
                    </FormLabel>
                    <RadioGroup row name="isDefaultAddress" value={formData.isDefaultAddress} onChange={handleInputChange}>
                      <FormControlLabel value={"Yes"} control={<Radio color="secondary" />} label="Yes" />
                      <FormControlLabel value={"No"} control={<Radio color="secondary" />} label="No" />
                    </RadioGroup>
                  </FormControl>
                </Grid>

              </Grid>

            </Grid>
          </form>

              {/* Form Action Controls */}
              <Grid item xs={12} sx={{ display: "flex", gap: 2, mt: 2 }}>
                {isDetailsEdit === false ? <Button 
                  type="submit" 
                  fullWidth 
                  variant="contained" 
                  sx={{ backgroundColor: "#ff3f6c", fontWeight: 700, py: 1.2, "&:hover": { backgroundColor: "#e2355e" } }}
                  onClick={handleSubmit}
                >
                  SAVE ADDRESS
                </Button> : 
                <Button 
                  type="submit" 
                  fullWidth 
                  variant="contained" 
                  sx={{ backgroundColor: "#ff3f6c", fontWeight: 700, py: 1.2, "&:hover": { backgroundColor: "#e2355e" } }}
                  onClick={handleEditSubmit}
                >
                  Edit ADDRESS
                </Button>
                }
                <Button 
                  fullWidth 
                  variant="outlined" 
                  onClick={handleClose}
                  sx={{ borderColor: "#d4d5d9", color: "#282c3f", fontWeight: 700 }}
                >
                  CANCEL
                </Button>
              </Grid>

        </Box>
      </Modal>

    </Box>
  );
}

const mapStateToProps = (state) => {
    return {
        AUTH_TOKEN : state.TOKEN.TOKEN,
        USER_DETAILS : state.USERDETAILS.USERDETAILS
    }
}

export default connect(mapStateToProps,null)(AddressPage)