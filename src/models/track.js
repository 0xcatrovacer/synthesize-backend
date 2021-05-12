const mongoose = require('mongoose')

const trackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    artists: [{
        type: String,
        properties: {
            name: {
                type: String
            }
        }
    }],
    duration: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    },
    imageURL: {
        type: String,
        required: true,
        trim: true
    }
})

const Track = mongoose.model('Track', trackSchema)

module.exports = Track