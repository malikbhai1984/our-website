


const mongoose = require('mongoose')

const serviceModel = new mongoose.Schema({
    title: String,
    desc: String,
    imageUrl: String,
    category:
     {type : mongoose.ObjectId,
        ref: "category"
    
    }

},{
    timestamps: true
});

module.exports = mongoose.model('services', serviceModel)


/*

//const mongoose = require('mongoose')
const mongoose = require("mongoose")

const serviceModel = new mongoose.Schema({
    title: String,
    desc: String,
    imageUrl: String,
   
},{
    timestamps: true
});

module.exports = mongoose.model('services', serviceModel)

*/