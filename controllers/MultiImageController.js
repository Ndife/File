const MultiImageService = require('../service/MultiImageService');

exports.addImages = (req,res) => {
    const {discription} = req.body;
    const images = req.files
    if(images.length <1) return res.send({error: 'Please provide an image'})
    return MultiImageService.addImages({discription,images},req,res);
}