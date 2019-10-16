const baseRepo = require('./baseRepo');
const ImageUploadModel = require('../models/ImageUploadModel');

function ImageUploadRepo(){

}

ImageUploadRepo.prototype = baseRepo(ImageUploadModel);

module.exports = new ImageUploadRepo();