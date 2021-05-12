const express = require('express')
const oauthpipeline = require('../middlewares/OauthSetup')

const router = express.Router()

const User = require('../models/User')


router.get('/login', (req, res) => {
    res.render('login', { user: req, user });
})


router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/');
})


router.post('/oauthlogin', async (req, res, next) => {
    try {
        const { name, sub } = await oauthpipeline(req, next)

        await User.findOne({ googleId: sub }).then((currentUser) => {
            if (currentUser) {
                next(currentUser)
            } else {
                new User({
                    googleId: sub,
                    username: name
                }).save().then((newUser) => {
                    next(newUser);
                })
            }
        })

        res.json({ name, googleId: sub, ok: 1 });

    } catch (e) {
        console.log(e)
    }
})

module.exports = router