const Users = require("../Model/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AuthRoutesHandler = async (req,res) => {

    const MEASURE = req.body.MEASURE;

    console.log("MEASURE : ",MEASURE);

    if(MEASURE == "SIGN_UP"){

        try{

            // 1. if the user alredy exists
            const isUserExists = await Users.findOne({email : req.body.EMAIL});
            console.log("isUserExists : ",isUserExists);

            // 2. user existed, send an error
            if(isUserExists){
                res.send({
                    Message : "User Already Exists",
                    Success : false
                })
            }

            // 3. encrypt the password
            const hashedPassword = await bcrypt.hash(req.body.PASSWORD,10);
            req.body.PASSWORD = hashedPassword;

            const hashedConfirmPassword = await bcrypt.hash(req.body.CONFIRM_PASSWORD,10);
            req.body.CONFIRM_PASSWORD = hashedConfirmPassword;

            //4. Create a new User, Save in DB
            const isUsers = await Users.create({
                firstName : req.body.FIRST_NAME,
                lastName : req.body.LAST_NAME,
                email : req.body.EMAIL,
                mobile : req.body.NUMBER,
                password :  req.body.PASSWORD,
                confirmPassword : req.body.CONFIRM_PASSWORD,
            });

            

            //5. check if new User is saved in DB or Not
            const isUserSignedUp = await Users.findOne({email : req.body.EMAIL});
            if(isUserSignedUp){
                res.send({
                    Message : "User Signed Up Successfully",
                    Success : true
                });
            }else{
                res.send({
                    Message : "User Not Signed Up Successfully",
                    Success : false
                });
            }

        }catch(error){
            res.send({
                Message : error.message,
                Success : false
            });
        }

    }

    if(MEASURE == "LOGGED_IN"){

        try{

            // const isUsers = await Users.find();
            // console.log("isUsers : ",isUsers);

            // 1. check EMail is already there or Not
            const isUser = await Users.findOne({email : req.body.EMAIL});
            console.log("isUser : ",isUser);

            //2. check Password matching or not
            const isMatch = await bcrypt.compare(req.body.PASSWORD,isUser.password);

            if(isUser && isMatch ){

                const token = jwt.sign(
                    {   
                        userId :isUser._id
                    },
                    process.env.SECRETE_KEY,
                    {
                        expiresIn : "1d"
                    }
                );

                res.send({
                    Message : 'User Logged In Successfully',
                    Success : true,
                    Token : token,
                    User : isUser 
                })

            }else{

                res.send({
                    Message : 'Email or Password wrong! Please Chech',
                    Success : false,
                })

            }

        }catch(error){
            res.send({
                Message : error.message,
                Success : false
            });
        }

    }
}

module.exports = {
    AuthRoutesHandler
}