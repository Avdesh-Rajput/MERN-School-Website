const jwt = require('jsonwebtoken');

const auth = (req,res,next) =>{
       try {
           let token = req.header('Authorization');
           if(token){
               token = token.split(" ")[1];
               let user = jwt.verify(token , "codieal");
               req.type = user.type;
               req.id = user._id;
           }else{
              res.status(401).json({
                message:"Unauthorized User"
              })
           }
           next();
       } catch (error) {
          console.log(error);
          res.status(401).json({
            message:"Unauthorized User"
          })
       }
}

module.exports = auth;