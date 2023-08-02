const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//add reference to user model
//add comments as embedded maybe?

const postSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  },{
    timestamps: true
  });

  module.exports = mongoose.model('Post', postSchema);