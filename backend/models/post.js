const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    id: String,
    title: String,
    content: String,
});
