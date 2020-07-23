const mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({

    title: {
        type: String,
    required: true,
    },
    date: {
        type: String,
    },
    content: {
        type: String,
    },
})

module.exports = mongoose.model('Article', articleSchema);