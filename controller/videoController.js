





const mongoose = require('mongoose');
const videoModel = require('../models/videoModel');

module.exports.addvideo = async (req, res) => {
 const title = req.body.title;
 const desc = req.body.desc;
 const imageUrl =  req.file.path;

 const video = new videoModel({title, desc, imageUrl})
 const result  = video.save();
 if(result){
  return res.send({code: 200, message: "suucess add"})
 }
}