const express = require('express');
const router = express.Router();
const ImageUpload = require('../controllers/ImageUploadController');
const { uploads }= require('../imageUpload/multerPicsUpload');


router.post('/addImage',uploads.single('imageUrl'), ImageUpload.addImage);
module.exports = router;



