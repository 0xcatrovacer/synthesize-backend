const fetch = require('node-fetch')

async function oauthpipeline(req, next) {
    try {
        const { access_token, email } = req.body

        if (!access_token || !email) {
            let err = new Error('Missing access_token or email')
            err.status = 400
            next(err)
            return
        }

        const userData = await fetch('https://www.googleapis.com/oauth2/v3/userinfo?access_token=' + access_token)
        userData = await userData.json()
        if (!userData) {
            const err = new Error('Authentication failed, try again')
            next(err)
            return
        }

        return userData

    } catch (e) {
        next(e)
    }
}

module.exports = oauthpipeline;