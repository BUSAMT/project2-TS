const Post = require('../models/post');

async function index(req, res) {
    const posts = await Post.find({});
    res.render('posts/index', {title: 'Swiftter', posts});
}

// function newPost(req, res) {
//     res.render('posts/index', { title: 'Swiftter', errorMsg: '' });
// }

async function create(req, res) {
    const posts = await Post.find({});
    console.log(req.body);
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    } try {
        req.body.user = req.user._id;
        const post = await Post.create(req.body);
        res.redirect(`/posts/${post._id}`);
    } catch(err) {
        console.log(err)
        res.render('posts/index', { title: 'Swiftter', errMSG: err.message, posts });
    }
}

async function show(req, res) {
    const post = await Post.findById(req.params.id);
    res.render('posts/show', { title: "Swifter", post });
}

async function deletePost(req, res) {
    console.log('hello');
    const post = await Post.deleteOne({ _id: req.params.id });
    res.redirect('/posts');
}

module.exports = {
    index,
    // new: newPost,
    create,
    show,
    delete: deletePost
  };

  