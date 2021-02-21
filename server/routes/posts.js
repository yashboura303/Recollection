const express = require('express');
const postController = require('../controllers/posts.js');

const router = express.Router();
const auth = require('../middleware/auth.js');

router.get('/', postController.getPosts);
router.post('/', auth, postController.createPost);
router.patch('/:id', auth, postController.updatePost);
router.delete('/:id', auth, postController.deletePost);
router.patch('/:id/likePost', auth, postController.likePost);

module.exports = router;
