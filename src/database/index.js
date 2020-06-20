const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/challenge') // connect db
mongoose.Promise = global.Promise;

module.exports = mongoose;

