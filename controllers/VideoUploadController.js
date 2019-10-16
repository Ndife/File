const VideoUploadService = require('../service/VideoUploadService');

exports.addVideo = (req,res) => {
    const {content} = req.body;
    const videoUrl = req.file.path
    const videoId = "";
    return VideoUploadService.addVideo({content,videoUrl, videoId},req,res);
}