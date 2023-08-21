

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
//path


const AdminControllers = require('./controller/AdminController')
const servicesController = require('./controller/servicesController');
const categoryController = require("./controller/categoryController")
//const videoController = require("./controller/videoController");
const videoController = require('./controller/videoController')


const mongoose = require('mongoose');
require('./db/config')

//image k leye multer
const multer  = require('multer')
//const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() 
    cb(null, file.fieldname + file.originalname )
  }
})

const upload = multer({ storage: storage })


const cors = require('cors');
app.use(cors());
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
});



//Admin apis
app.get('/admin/admins', AdminControllers.getAdmins)
 app.post('/admin/add', AdminControllers.addAdmins)

 app.post('/admin/login', AdminControllers.loginAdmin)

///Services apis
app.post('/api/services', upload.single('image'), servicesController.addServices);
app.get('/api/services', servicesController.getServices);

//api for image path
const path = require('path');

app.use(express.static(path.join(__dirname, "public")));
app.use("/api/files", express.static(path.join(__dirname, "/upload")));
//const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);

//category apis
app.post('/add/category', categoryController.addcat);
app.get('/get/categories', categoryController.getcat);

//video apis
//app.post('/add/video', videoController.addvideo);



app.listen(port, () => {
  console.log(`server is running ${port}`)
})