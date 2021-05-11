const mongoose = require('mongoose')

const dbURL = process.env.SYNTH_MONGODB_URL;

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
})