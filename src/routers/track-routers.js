const express = require('express')
const verify = require('../middlewares/verify')

const Track = require('../models/Track')
const getTracks = require('../utilities/trackSearchAlgorithm.js')

const router = express.Router()


// Post a new track to database
router.post('/track', async (req, res) => {
    const track = new Track(req.body)

    try {
        await track.save()
        res.status(201).send(track)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

// Get all tracks from database
router.get('/tracks', async (req, res) => {
    try {
        const tracks = await Track.find();
        res.status(200).send(tracks);
    } catch (e) {
        res.status(500).send(e.message)
    }
})

// Get track by genre
router.post('/genretracks', async (req, res) => {

    const genre = req.body.genre;

    try {
        const genretracks = await Track.find({ genre })
        res.status(200).send(genretracks)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

// Like a track
// router.patch('/liketrack/:id', async (req, res) => {

//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['likedby']
//     const isValid = updates.every((update) => {
//         return allowedUpdates.includes(update)
//     })

//     if (!isValid) {
//         return res.status(400).send({ error: 'Invalid Update' })
//     }

//     try {

//         const track = await Track.findOne({ _id: req.params.id, likedby: req.user._id })

//         if (!track) {
//             return res.status(404).send()
//         }

//         updates.forEach((update) => {
//             track[update] = req.body[update]
//         })

//         await track.save()

//         res.send(track)

//     } catch (e) {
//         res.status(500).send(e)
//     }

// })

// //Show Liked Tracks
// router.get('/likedtracks', async (req, res) => {
//     try {
//         const likedtracks = await req.user.populate({
//             path: 'tracks'
//         }).execPopulate()

//         res.status(200).send(req.user.likedtracks)

//     } catch (e) {

//     }
// })

router.post('/search', async (req, res) => {
    try {
        const searchInput = req.body.searchInput || ''
        const tracks = await Track.find()

        const trackresult = getTracks(searchInput, tracks)

        const searchresults = [trackresult[0], trackresult[1], trackresult[2], trackresult[3], trackresult[4]]

        res.status(200).send(searchresults)
    } catch (e) {
        res.status(500).send(e.message)
    }
})



module.exports = router