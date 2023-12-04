const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async(req,res) => {
    const {username , password , type} = req.body;
    console.log(req.body);
    try {
         if(!username || !password || !type){
             return res.status(402).send({
              message:"Fill all the Fields"
        });
    }
        const user = await User.findOne({username:username});
        if(!user){
            return res.status(402).send({
                message:"User Doesn't exist"
            })
        }
        if(await bcrypt.compare(password , user.password) && user.type.toUpperCase() === type.toUpperCase()){
            return res.status(200).send({
                user: user,
                data:{
                    token:jwt.sign(user.toJSON() , 'codieal' , {expiresIn:'100000'})
                }
            })
        } else {
            return res.status(401).send({
                message: "Incorrect password or type"
            });
        }
    }
     catch (error) {
        console.log(error);
        return res.status(500).send({
            message:"Internal Server Error"
        })
    }
}

module.exports = {login}