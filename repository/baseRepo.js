class BaseRepository{
    constructor(model){
        if(!model) throw new error('Model is require');
        this.model = model;
    }

    addData(data,callback) {
        this.model.create(data,callback);
    }

    updateData(id,data,callback){
        this.model.updateOne(id,data,callback);
    }

    getDataByParams(params,callback){
        this.model.findOne(params,callback);
    }

    getAllData(params, callback) {
        this.model.find(params, callback);
    }
}


module.exports = (model) =>{
    return new BaseRepository(model);
}