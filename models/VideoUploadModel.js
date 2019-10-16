const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoUploadModel = new Schema({
    content:{type: String, default:''},
    videoUrl:{type: String, default:''},
    videoId:{type: String, default:''},
    post_date: {type: Date,default: Date.now}

})


module.exports = mongoose.model('VideoUpload', VideoUploadModel);
