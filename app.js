// importing necessary dependancies
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
var bodyParser = require('body-parser');

const connectDB = require('./database/connection');
var searchModel =  require('./models/data');

const app = express();

dotenv.config({ path : 'config.env'});

const PORT = process.env.PORT || 8080;
// mongodb connection
connectDB();

///fetch the data from request
app.use(bodyParser.urlencoded({extended:false}));

//search
app.get('/search',(req,res)=>{
    try {
        searchModel.find({location:{'$regex':req.query.dsearch}},(err,data)=>{
            if(err){
                console.log(err);
            }else{
                res.render('pages/home',{data:data});
            }
        })
    } catch (error) {
        console.log(error);
    }
});

// connecting to localhost
app.get('/', (req, res) => res.send('Hello!'));
app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));