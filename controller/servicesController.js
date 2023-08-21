


//es ki practice kerni the opper..
const mongoose = require('mongoose');
//service controller saifi code
const servicesModel = require('../models/serviceModel')




module.exports.addServices = async (req, res) =>{

  try{

      const title = req.body.title;
      const desc = req.body.desc;
    
      //const imageUrl = req.file.path;
      //const imageUrl = req.file.filename;
      const imageUrl = req.file.filename.replace(/\\/g, '/');
      
  
      const services = await servicesModel({title, desc,imageUrl});
  
      const result = await services.save();
  
      if(result){
          return res.send({code: 200, message: "data add"})
      }else{
         
      }
  

  }catch(err){
      console.log(err)
      return res.send({code:400, message: "not send"})
  }
 


}



  //get allproducts api

  module.exports.getServices = async (req, res) =>{
    const product = await servicesModel.find({  })

    if(product){
        return res.send({code: 200, message: "get all product", data: product})
    }

  }
