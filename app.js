var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Mongoose = require('mongoose');

var ImageUpload = require('./routes/ImageUpload');
var MultiImage = require('./routes/MultiImage');
var VideoUpload = require('./routes/VideoUpload');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/files', express.static('files'))



Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://localhost:27017/FliesDB', { useUnifiedTopology: true, useNewUrlParser: true });

app.use(express.static(path.join(__dirname, 'public')));

app.use('/ImageUpload', ImageUpload);
app.use('/MultiImage', MultiImage);
app.use('/VideoUpload', VideoUpload);


module.exports = app;
