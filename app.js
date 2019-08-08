const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const app = express();
mongoose.connect('mongodb://localhost/application', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('<h1>Server works!</h1>')
});

app.use('/', router);



app.listen(3001, () => {
    console.log('Server starts!')
});