const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageUploadModel = new Schema({
    content:{type: String, default:''},
    imageUrl:{type: String, default:''},
    imageId:{type: String, default:''},
    post_date: {type: Date,default: Date.now}

})


module.exports = mongoose.model('ImageUpload', ImageUploadModel);
