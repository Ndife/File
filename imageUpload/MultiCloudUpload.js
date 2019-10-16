const cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var multer = require('multer');
const config = require('../imageUpload/cloudinaryConfig').cloudinary;
const {uploads} = require('./multerPicsUpload');

cloudinary.config({
cloud_name: config.cloud_name,
api_key: config.api_key,
api_secret: config.api_secret
})

 
 
var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'folder-name',
  allowedFormats: ['jpg', 'png'],
//   transformation: { width: 400, crop: "pad" },
  filename: function (req, file, cb) {
    cb(undefined, file.originalname);
  }
});
 
exports.upload = multer({ storage: storage });
