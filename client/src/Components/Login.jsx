import React, {useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { authTokenAction, userDetailsAction } from "./Redux/Action";
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

const Login = ({storeTokenfromLogin, AUTH_TOKEN, userDetailsfromLogin,USER_DETAILS}) => {

  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const [isLogggedIn,setIsLoggedIn] = useState(false);
  const [loggedValidation, setLoggedValidation] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const callforLoggedInUsers = async () => {

    const response = await axios.post("http://localhost:8000/api/Auth/Users",{
      "MEASURE" : "LOGGED_IN",
      "EMAIL" : data?.email,
      "PASSWORD" : data?.password 
    });
    
    return response;

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data : ",data);

    callforLoggedInUsers()
    .then((data) => {

        if(data == null){

        }else{
          
          //data = JSON.parse(data);
          console.log("LoggedIn response : ",data);

          if(data?.data?.Message === "User Logged In Successfully"){

            console.log("Auth_Token : ",data?.data?.Token)

            storeTokenfromLogin(data?.data?.Token);
            userDetailsfromLogin(data?.data?.User);

            setData({
              email: "",
              password: "",
            });
            setIsLoggedIn(true);
            setLoggedValidation(false);
            setLoginStatus(true);

            setTimeout(() => {
              setIsLoggedIn(false);
              setLoginStatus(false);
              navigate("/")
            },2000)

          }else{
            
          }

        }
      
      })

  };

  const handleLoginClose = () => {
    setLoginStatus(false);
  }

  useEffect(() => {

    if(data.email !=="" && data?.password !== ""){
      setLoggedValidation(true);
    }else{
      setLoggedValidation(false);
    }

  },[data])

  useEffect(() => {
    console.log("AUTH_TOKEN : ",AUTH_TOKEN);
  },[AUTH_TOKEN])

  useEffect(() => {
    console.log("USER_DETAILS : ",USER_DETAILS);
  },[USER_DETAILS])

  return (
    <Box
      sx={{
        backgroundColor: "#ffeee9", // Exact color match from your CSS
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
          maxWidth: "400px", // Standard compact Myntra structural form width
          borderRadius: "0px",
          overflow: "hidden",
        }}
      >
        {/* Banner Graphic Header */}
        <Box
          component="img"
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/1/14/d63fc446-4087-4e07-b2dd-1d060368d2661642184399341-Banner_Login-page-400.png"
          alt="Myntra Login Banner"
          sx={{
            width: "100%",
            display: "block",
          }}
        />

        {/* Input Interactive Form Area */}
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
            Login
          </Typography>

          {/* Email Input */}
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
            sx={{
              mb: 2.5,
              "& .MuiOutlinedInput-root": {
                borderRadius: "0px", // Replicates structural square fields
              },
            }}
          />

          {/* Password Input */}
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
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: "0px",
              },
            }}
          />

          {/* Submit Action Action */}
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#ff3f6c", // Matches official Myntra active action highlight brand pink
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
            disabled={loggedValidation == false}
          >
            Submit
          </Button>

          {/* Redirect Subtext */}
         {isLogggedIn == false && <Typography
            variant="body2"
            sx={{
              mt: 3,
              color: "#282c3f",
              fontFamily: "Assistant, sans-serif",
              fontSize: "13px",
            }}
          >
            If you are a new user then click here{" "}
            <Link
              component={RouterLink}
              to="/signup"
              sx={{
                color: "#ff3f6c",
                fontWeight: 700,
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Signup
            </Link>
          </Typography> }

          {isLogggedIn == true && <Typography
            variant="body2"
            sx={{
              mt: 3,
              color: "#282c3f",
              fontFamily: "Assistant, sans-serif",
              fontSize: "13px",
            }}
          >
            Logged In Successfully{" "}
            <Link
              component={RouterLink}
              to="/"
              sx={{
                color: "#ff3f6c",
                fontWeight: 700,
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Home
            </Link>
          </Typography> }

        </Box>

      </Paper>

      <Snackbar
        open={loginStatus}
        autoHideDuration={3000} // Closes automatically after 3 seconds
        onClose={handleLoginClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Positions it top-center
      >
        <Alert 
          onClose={handleLoginClose} 
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
          Login Successfully!
        </Alert>
      </Snackbar>

    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    AUTH_TOKEN : state.TOKEN.TOKEN,
    USER_DETAILS : state.USERDETAILS.USERDETAILS
  }
}

const mapDispatchToProps = (dispatch) => ({

  storeTokenfromLogin : (data) => dispatch(authTokenAction(data)),
  userDetailsfromLogin : (data) => dispatch(userDetailsAction(data)),

});

export default connect(mapStateToProps,mapDispatchToProps)(Login);