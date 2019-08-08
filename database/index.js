const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/test';

const options = {
    useNewUrlParser: true
};

mongoose.Promise = global.Promise;
mongoose.connect(url, options);

const db = mongoose.connection;

db.on('open', function () {
    console.log('DB successfully open')
});

db.on('error', function () {
    console.log('Fail to load DB')
});

module.exports = db;