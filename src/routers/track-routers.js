const express = require('express')

const Track = require('../models/Track')

const router = new express.Router()

router.post('/track', async (req, res) => {
    const track = new Track(req.body)

    try {
        await track.save()
        res.status(201).send(track)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

router.get('/tracks', async (req, res) => {
    try {
        const tracks = await Track.find();
        res.status(200).send(tracks);
    } catch (e) {
        res.status(500).send(e.message)
    }
})

module.exports = router