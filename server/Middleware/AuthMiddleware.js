const jwt = require("jsonwebtoken");

module.exports = (req,res,next) => {

    try{

        const authMiddleware = req.headers.authorization;
        console.log("authMiddleware : ",authMiddleware)

        if(!authMiddleware){
            return res.send({
                Message : "Authorization header is missing",
                Success : false
            })
        }

        const token = authMiddleware.split(" ")[1];

         if (!token) {
            return res.send({
                Message: "JWT Token is missing",
                Success: false
            });
        }

        const decodedToken = jwt.verify(token,process.env.SECRETE_KEY);
        console.log("decodedToken : ",decodedToken);

        req.body.userId = decodedToken.userId;

        next();

    }catch(error){
        res.send({
            Message : error.message,
            Success : false
        });
    }

}