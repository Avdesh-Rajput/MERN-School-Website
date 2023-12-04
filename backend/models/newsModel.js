const mongoose = require('mongoose');

const newsModel = new mongoose.Schema({
    id:{
       type:Number,
       default:Date.now,
       required:true,
    },
    title: {
        type : String,
        required: true,
    },
    description: {
       type: String,
       required: true,
       trim:true,
    },
    img:{
       type:String,
    }
});

const News = mongoose.model("News" , newsModel);
module.exports = News;