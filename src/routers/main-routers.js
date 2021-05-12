require('../middlewares/OauthSetup');
const User = require('../models/User');
const verify = require('../middlewares/verify');

const router = require('express').Router();

router.get("/", verify, (req, res) => {
    try {
        User.findOne({ googleId: req.user.googleId }).then(() => {
            res.send(req.userDB)
        });


    } catch (err) {
        console.log(err);
    }
})

module.exports = router;