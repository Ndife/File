const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MultiImageModel = new Schema({
    discription:{type: String, default:''},
    images:{type: Array, default:[]},
    post_date: {type: Date,default: Date.now}

})


module.exports = mongoose.model('MultiImageModel', MultiImageModel);