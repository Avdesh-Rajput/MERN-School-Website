const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const addTeacher = async (req,res) => {
   if(req.type === "Admin"){
   const {username , password , type} = req.body;
   try {
      if(!username || !password || !type){
          return res.status(402).send({
              message:"Fill all the fields",
         })
        }
      const user = await User.findOne({username:username});
      console.log(user)
      if(user){
           return res.status(402).send({
            message:"User Already exist"
          })
      }
      const encPassword = await bcrypt.hash(password , 10);

      const newUser = await User.create({
                      username:username,
                      password:encPassword,
                      type:type,
               })
          res.status(200).send({
          user: newUser,
          message:"Succesfully create user"
       })

   }
    catch (error) {
      console.log(error);
      res.status(500).send({
        message:"Fill all the fields",
      })
   }
}
 else{
     res.status(402).send({
        message:"Unauthorized User"
     })
 }
}


const addStudent = async (req,res) => {
  if(req.type === "Admin" || req.type === "Sub-Admin"){
  const {username , password , type} = req.body;
  try {
     if(!username || !password || !type){
         return res.status(402).send({
             message:"Fill all the fields",
        })
       }
     const user = await User.findOne({username:username});
     console.log(user)
     if(user){
          return res.status(402).send({
           message:"User Already exist"
         })
     }
     const encPassword = await bcrypt.hash(password , 10);

     const newUser = await User.create({
                     username:username,
                     password:encPassword,
                     type:type,
              })
         res.status(200).send({
         user: newUser,
         message:"Succesfully create user"
      })

  }
   catch (error) {
     console.log(error);
     res.status(500).send({
       message:"Fill all the fields",
     })
  }
}
else{
    res.status(402).send({
       message:"Unauthorized User"
    })
}
}

module.exports = {addTeacher , addStudent};