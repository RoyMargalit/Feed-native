const mongoose = require('mongoose')

const feedSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}) 

mongoose.model('Feed',feedSchema)