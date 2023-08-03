var express = require('express');
var router = express.Router();
const postsController = require('../controllers/posts');
const ensureLoggedIn = require('../config/ensureLoggedIn');


//GET /posts
router.get('/', postsController.index);

//GET /posts/:id
router.get('/:id', ensureLoggedIn, postsController.show);

//POST /posts
router.post('/', ensureLoggedIn, postsController.create);

//DELETE /posts/:id
router.delete('/:id', ensureLoggedIn, postsController.delete);

//PUT /posts/:id 









module.exports = router;