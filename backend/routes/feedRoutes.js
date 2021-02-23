const express = require('express');
const mongoose = require('mongoose');

const Feed = mongoose.model('Feed');

const router = express.Router();

router.get('/', async (req, res) => {
    const feeds = await Feed.find({});
    console.log(feeds);
    res.send(feeds);
  });

router.post('/feeds', async (req, res) => {
    const { email, message } = req.body;

    if (!email || !message) {
        return res
            .status(422)
            .send({ error: 'You must provide an email and a message' });
    }

    try {
        const feed = new Feed({ email, message });
        await feed.save();
        res.send(feed);
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
});

module.exports = router;
