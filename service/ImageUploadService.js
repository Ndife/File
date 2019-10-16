const ImageUploadRepo = require('../repository/ImageUploadRepo');
const {upload} = require('../imageUpload/signleCloudUpload');

exports.addImage = (data,req,res) => {
    upload(data.imageUrl).then(result => {
        data.imageUrl = result.url,
        data.imageId = result.Id
        ImageUploadRepo.addData(data, (err, result) => {
            if(err) res.send(err);
            res.json({
                success: true,
                mesage: result
            })
        })
    })
    .catch(err => { res.send(err) 
    });
}
