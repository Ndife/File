const cloudinary = require('cloudinary');
const config = require('./cloudinaryConfig').cloudinary;
cloudinary.config({
cloud_name: config.cloud_name,
api_key: config.api_key,
api_secret: config.api_secret
});


// file upload using callback
// exports.upload = function(file, callback, options){
//    return cloudinary.uploader.upload(file,callback, options);
// }


// file upload using promises
exports.upload = function(file){
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, function(result){
            resolve({url: result.url, Id: result.public_id});
        }, {resource_type: "auto", 
            folder:"/myWorks/",
            use_filename: true})
   })
}