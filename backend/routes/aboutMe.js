const express = require('express');

const aboutMeController = require('../controllers/aboutMe');

const router = express.Router();

// GET /feed/posts
router.get('/', aboutMeController.getData);

// POST /feed/post
// router.post('/post', aboutMeController.createPost);

module.exports = router;