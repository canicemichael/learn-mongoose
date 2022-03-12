const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
    .then(console.log('Successfully connected to mongoDB...'))
    .catch(err => console.log('Connection to mongoDB failed..', err));

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    coments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

const holdingSchema = new mongoose.Schema({
    asset: {
        type: { type:String },
        ticker: String
    }
});

