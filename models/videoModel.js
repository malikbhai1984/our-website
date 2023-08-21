const mongoose = require('mongoose')

const videoModel = new mongoose.Schema({
    title: String,
    desc: String,
    videoUrl: String, // Add a new field for the video URL
},{
    timestamps: true
});

module.exports = mongoose.model('video', videoModel)