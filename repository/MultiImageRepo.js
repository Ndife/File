const baseRepo = require('./baseRepo');
const MultiImageModel = require('../models/MultiImageModel');

function MultiImageRepo(){

}

MultiImageRepo.prototype = baseRepo(MultiImageModel);

module.exports = new MultiImageRepo();