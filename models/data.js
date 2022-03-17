var mongoose = require('mongoose');

var searchSchema = new mongoose.Schema({
    location:{
        type:String
    },
    hospital:{
        type:String
    }
});

module.exports =  mongoose.model('location',searchSchema);