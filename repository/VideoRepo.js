const baseRepo = require('./baseRepo');
const VideoUploadModel = require('../models/VideoUploadModel');

function VideoUploadRepo(){

}

VideoUploadRepo.prototype = baseRepo(VideoUploadModel);

module.exports = new VideoUploadRepo();