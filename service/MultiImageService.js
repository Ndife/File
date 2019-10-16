const MultiImageRepo = require('../repository/MultiImageRepo');

exports.addImages = (data,req,res) => {
    var list = new Array();
    data.images.map(({url, public_id}) =>{
        list.push({url, public_id})
    })
    data.images = list;
    MultiImageRepo.addData(data, (err, result) => {
        if(err) res.send(err);
        res.json({
            success: true,
            mesage: result
        })
    })
}
