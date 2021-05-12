const fetch = require('node-fetch')
const User = require('../models/User')

module.exports = async function (req, res, next) {
    const token = req.header("Authorization")

    try {
        let userData = await fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + token)

        userData = await userData.json()

        const googleId = userData.sub

        User.findOne({ googleId }).then((foundUser) => {
            if (foundUser) {
                req.user = userData
                req.userDB = foundUser

                next()
            } else {
                req.send(false)
            }
        })

    } catch (e) {
        console.log(err)
    }
}