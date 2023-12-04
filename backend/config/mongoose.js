const mongoose = require('mongoose');

const connectDB = async() => {
     try {
       const conn = await mongoose.connect('mongodb+srv://avdeshrajput:123456cluster@cluster0.djmqdty.mongodb.net/?retryWrites=true&w=majority', 
          {
           
           
          }
        )
        console.log('Succesfully connected to db');
     } catch (error) {
        console.log('Error in connecting to Db' , error)
     }
};

module.exports = connectDB;