const express = require('express');
const router = express.Router();
const MultiImage = require('../controllers/MultiImageController');
const {upload} = require('../imageUpload/MultiCloudUpload');


router.post('/addImages',upload.array('images', 10), MultiImage.addImages);

module.exports = router;

