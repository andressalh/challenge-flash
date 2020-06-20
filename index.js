const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();
app.use(express.json()); // allow insert data json 
app.use(cors());

mongoose.connect('mongodb://localhost:27017/challenge', {useNewUrlParser:true}) // connect db

requireDir('./src/models'); //manage models - 

app.use('/challenge', require('./src/routes/routes'));   //system path
app.listen(3001);