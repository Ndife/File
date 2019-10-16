const VideoRepo = require('../repository/VideoRepo');
const {upload} = require('../imageUpload/signleCloudUpload');

exports.addVideo = (data,req,res) => {
    upload(data.videoUrl).then(result => {
        data.videoUrl = result.url,
        data.videoId = result.Id
        VideoRepo.addData(data, (err, result) => {
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
