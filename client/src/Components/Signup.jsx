import React, { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
  Snackbar, 
  Alert,
} from "@mui/material";
import axios from "axios";

const Signup = () => {
  
  const navigate = useNavigate()

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const { firstname, lastname, email, number, password, confirmPassword } = data;

  const [isSignedUp, setIsSignedUp] = useState(false);
  const [signedValidation, setIsSignedValidation] = useState(false);
  const [signupStatus, setSignupStatus] = useState(false);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const callforSignupUsers = async () => {

    try{

      const response = await axios.post("http://localhost:8000/api/Auth/Users",{
        "MEASURE" : "SIGN_UP",
        "FIRST_NAME" : data.firstname,
        "LAST_NAME" : data.lastname,
        "EMAIL" : data.email,
        "NUMBER" : data.number,
        "PASSWORD" : data.password,
        "CONFIRM_PASSWORD" : data.confirmPassword
      })
      return response;

    }catch(error){
      console.log("error : ",error);
    }

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data : ",data);

    if(data?.password !== data?.confirmPassword){

      alert("Please Check! Password and Confirm Password Should Match Exactly Same...");

    }else{

      callforSignupUsers()
      .then((data) => {

        if(data == null){

        }else{
          
          //data = JSON.parse(data);
          console.log("Signup response : ",data);

          if(data?.data?.Message == "User Signed Up Successfully" || data?.data?.Message == "User Already Exists" || data?.data?.Message == "No write concern mode named 'majority;' found in replica set configuration"){

            setData({
              firstname: "",
              lastname: "",
              email: "",
              number: "",
              password: "",
              confirmPassword: "",
            });
            setIsSignedUp(true)
            setIsSignedValidation(false);
            setSignupStatus(true);

            setTimeout(() => {
              setIsSignedUp(false);
              setSignupStatus(false);
              navigate("/login");
            },2000)

          }else{
            
          }

        }
      
      })

    }

  };

  const handleSignupClose = () => {
    setSignupStatus(false);
  }


  useEffect(() => {

    if(data?.firstname !== "" && data?.lastname !== "" && data?.email !== "" && data?.number !== "" && data?.password !== "" && data?.confirmPassword !== ""){
      setIsSignedValidation(true);
    }else{
      setIsSignedValidation(false);
    }

  },[data])

  return (
    <Box
      sx={{
        backgroundColor: "#ffeee9", // Exact color match from your source CSS
        //minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 3,
        px: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: "400px", // Maintains crisp, matching alignment with your Login layout
          borderRadius: "0px",
          overflow: "hidden",
        }}
      >
        {/* Banner Graphic Header */}
        <Box
          component="img"
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/1/14/d63fc446-4087-4e07-b2dd-1d060368d2661642184399341-Banner_Login-page-400.png"
          alt="Myntra Registration Banner"
          sx={{
            width: "100%",
            display: "block",
          }}
        />

        {/* Form Interactive Input Content Container */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          autoComplete="off"
          sx={{
            p: 4,
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#424553",
              textTransform: "capitalize",
              alignSelf: "flex-start",
              mb: 3,
              fontFamily: "Assistant, sans-serif",
            }}
          >
            Signup
          </Typography>

          {/* First Name Field */}
          <TextField
            fullWidth
            type="text"
            label="Enter your first name"
            name="firstname"
            value={firstname}
            onChange={handleChange}
            required
            variant="outlined"
            size="small"
            sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: "0px" } }}
          />

          {/* Last Name Field */}
          <TextField
            fullWidth
            type="text"
            label="Enter your last name"
            name="lastname"
            value={lastname}
            onChange={handleChange}
            required
            variant="outlined"
            size="small"
            sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: "0px" } }}
          />

          {/* Email Field */}
          <TextField
            fullWidth
            type="email"
            label="Enter your email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            variant="outlined"
            size="small"
            sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: "0px" } }}
          />

          {/* Phone Number Field */}
          <TextField
            fullWidth
            type="number"
            label="Enter your number"
            name="number"
            value={number}
            onChange={handleChange}
            required
            variant="outlined"
            size="small"
            sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: "0px" } }}
          />

          {/* Password Field */}
          <TextField
            fullWidth
            type="password"
            label="Enter your password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            variant="outlined"
            size="small"
            sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: "0px" } }}
          />

          {/* Confirm Password Field */}
          <TextField
            fullWidth
            type="password"
            label="Enter the confirmed password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
            variant="outlined"
            size="small"
            sx={{ mb: 3, "& .MuiOutlinedInput-root": { borderRadius: "0px" } }}
          />

          {/* Form Submit Action Toggle */}
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#ff3f6c", // Standardized to match active Myntra profile branding
              color: "#ffffff",
              fontWeight: 700,
              py: 1,
              borderRadius: "2px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              "&:hover": {
                backgroundColor: "#e72e5b",
              },
            }}
            disabled={signedValidation == false}
          >
            Submit
          </Button>

          {/* Back to Login Hyperlink */}
         {isSignedUp == false && <Typography
            variant="body2"
            sx={{
              mt: 3,
              color: "#282c3f",
              fontFamily: "Assistant, sans-serif",
              fontSize: "13px",
            }}
          >
            Already have an account?{" "}
            <Link
              component={RouterLink}
              to="/login"
              sx={{
                color: "#ff3f6c",
                fontWeight: 700,
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Login here
            </Link>
          </Typography> }

          {isSignedUp == true && <Typography
            variant="body2"
            sx={{
              mt: 3,
              color: "#282c3f",
              fontFamily: "Assistant, sans-serif",
              fontSize: "13px",
            }}
          >
            Signed up Successfully?{" "}
            <Link
              component={RouterLink}
              to="/login"
              sx={{
                color: "#ff3f6c",
                fontWeight: 700,
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Login here
            </Link>
          </Typography> }

        </Box>
      </Paper>

      <Snackbar
        open={signupStatus}
        autoHideDuration={3000} // Closes automatically after 3 seconds
        onClose={handleSignupClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Positions it top-center
      >
        <Alert 
          onClose={handleSignupClose} 
          severity="success" 
          variant="filled" 
          sx={{ 
            width: "100%", 
            fontWeight: 600,
            backgroundColor: "#4caf50", // Flat clean green alert background
            fontSize: "14px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.15)"
          }}
        >
          Signup Successfully!
        </Alert>
      </Snackbar>

    </Box>
  );
};

export default Signup;