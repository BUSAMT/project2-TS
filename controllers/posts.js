const Post = require('../models/post');

async function index(req, res) {
    const posts = await Post.find({});
    res.render('posts/index', {title: 'Swiftter', posts});
}

function newPost(req, res) {
    res.render('posts/index', { errorMsg: '' });
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    } try {
        const post = await Post.create(req.body);
        res.redirect(`/posts/${post._id}`);
    } catch(err) {
        console.log(err)
        res.render('posts/new', { errMSG: err.message });
    }
}

async function show(req, res) {
    const post = await Post.findById(req.params.id);
    res.render('posts/show', { title: "Swifter", post });
}

async function deletePost(req, res) {
    const post = await Post.findOne({ 'posts._id': req.params.id });
    console.log(`deletePost: ${post}`);
    post.remove(req.params.id);
    await post.save();
    res.redirect('posts/index');
}

module.exports = {
    index,
    new: newPost,
    create,
    show,
    delete: deletePost
  };

  