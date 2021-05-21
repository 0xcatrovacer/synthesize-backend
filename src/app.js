const express = require('express')

require('./db/mongoose')


const authRouter = require('./routers/auth-routers')
const mainRouter = require('./routers/main-routers')
const trackRouter = require('./routers/track-routers')


const app = express()

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', '*');
    res.set('Access-Control-Allow-Methods', '*');
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    next();
});

app.use(express.json())

app.use('/auth', authRouter)
app.use('/main', mainRouter)
app.use(trackRouter)


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Backend running on port ${port}`)
})