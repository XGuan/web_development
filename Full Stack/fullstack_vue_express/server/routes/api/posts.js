const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

const dotenv = require('dotenv');
dotenv.config();
// add your mongodb uri in the environment file.
const uri = process.env.MONGODB_URI

// Get posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

// Add post
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

// Delete post
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne(
        {_id: new mongodb.ObjectID(req.params.id)});
        res.status(200).send();
});

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect(
        uri, {
            useNewUrlParser: true
        }
    )
    // vue_express - is database name (if not exist, the mongodb will do create one for you) 
    return client.db('vue_express').collection('posts');
}

module.exports = router;