var express = require('express');
var router = express.Router();
const postsController = require('../controllers/posts');

//GET /posts
router.get('/', postsController.index);

//GET posts/new
router.get('/new', postsController.new);

//GET /posts/:id
router.get('/:id', postsController.show);

//POST /posts
router.post('/', postsController.create);





module.exports = router;