const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true
    }
})

userSchema.virtual('likedtracks', {
    ref: 'Track',
    localField: '_id',
    foreignField: 'likedby'
})


const User = mongoose.model('User', userSchema)

module.exports = User