const express = require('express');
const serviceRoutes = require('./routes/serviceRoutes');
const newsRoutes = require('./routes/newsRoutes');
const loginRoutes = require('./routes/loginRoutes');
const addParticipantRoutes = require('./routes/addParticipantRoutes');
const dotenv = require('dotenv');
const connectDB = require('./config/mongoose');
const cors = require('cors');
const port = 8000;

dotenv.config();
connectDB();
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());


app.listen(port , function(error){
    if(error){
        console.log(error);
    }
    console.log('server is up at port' , port)
})


app.use('/api/service' , serviceRoutes);
app.use('/api/news' , newsRoutes);
app.use('/api/login' , loginRoutes);
app.use('/api/addParticipant', addParticipantRoutes);


app.get('/' , (req,res)=>{
     res.send('Api is running')
});

