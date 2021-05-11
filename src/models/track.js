const mongoose = require('mongoose')

const trackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    artists: [{
        artist: {
            type: String,
            required: true,
            trim: true
        }
    }],
    MinuteDuration: {
        type: Number,
        required: true
    },
    secondDuration: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

const Track = mongoose.model('Track', trackSchema)