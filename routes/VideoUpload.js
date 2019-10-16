const express = require('express');
const router = express.Router();
const VideoUpload = require('../controllers/VideoUploadController');
const { uploads }= require('../imageUpload/MulterVideoUpload');


router.post('/addVideo',uploads.single('videoUrl'), VideoUpload.addVideo);

module.exports = router;



