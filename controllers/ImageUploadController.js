const ImageUploadService = require('../service/ImageUploadService');

exports.addImage = (req,res) => {
    const {content} = req.body;
    const imageUrl = req.file.path
    const imageId = "";
    return ImageUploadService.addImage({content,imageUrl, imageId},req,res);
}