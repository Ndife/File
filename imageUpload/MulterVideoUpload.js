var multer = require('multer');

//Specifying the storage path for the movie
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        if(file.mimetype === 'video/mp4' || file.mimetype === 'video/flv' ||
        file.mimetype === 'video/mov' || file.mimetype === 'video/avi'){
            cb(null, './files/videos/');
        }else{
            cb({message: 'The file is not a video file'}, false);
        }
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})

exports.uploads = multer({storage: storage});
