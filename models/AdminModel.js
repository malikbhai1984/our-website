

const mongoose = require('mongoose');

const AdminModel = mongoose.model('admin', {
    type: String,
    userName: String,
    password: String,
    status: String,
    date: String,
});


module.exports = AdminModel


//default admin createio 

async function createDefaultAdmin(){
  const existingAdmin = await AdminModel.findOne({userName: "GIDS"})

  if(!existingAdmin){
    const result = await AdminModel.create({
      userName: "GIDS",
      password: "gids@gids",
      type: "ADMIN"
    });
    if(result){
      console.log("create new Admin")
    }else{
      console.log("not create admin")
    }
  }else{
    console.log("admin already have")
  }


}

createDefaultAdmin();
/*
// Default admin creation script
async function createDefaultAdmin() {
    try {
      const existingAdmin = await AdminModel.findOne({ userName: 'admin-default' });
  
      if (!existingAdmin) {
        const result = await AdminModel.create({
          type: 'ADMIN',
          userName: 'admin-default',
          password: 'pass123',
          status: 'ACTIVE',
          date: new Date(),
        });
  
        if (result) {
          console.log('Default admin created successfully.');
        } else {
          console.error('Failed to create default admin.');
        }
      } else {
        console.log('Default admin already exists.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  createDefaultAdmin();
*/
/*
AdminModel.create({
    type:  'ADMIN',
    userName : 'admin-default',
    password: 'pass123',
    status: 'ACTIVE',
    date: new Date(),
})

*/