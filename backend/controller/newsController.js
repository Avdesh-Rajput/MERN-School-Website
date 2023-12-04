const newsModel = require('../models/newsModel');


const getNews = async(req , res) => {
    const _data = await newsModel.find({});
    if(_data){
       return res.send({data: _data}); 
    }
     return res.send("error")
};

const addNews = async(req,res) => {
    const {title , description} = req.body;

     if(!title || !description){
         res.status(400);
         throw new Error('Fill all fields')
     }
     else{
         const newNews = new newsModel({
             title:title,
             description:description
         })
         const success = newNews.save();

         if(success){
            return res.send('success');
         }
         else{
            return res.send('error')
         }
     }
};

module.exports = {
    getNews,
    addNews
}