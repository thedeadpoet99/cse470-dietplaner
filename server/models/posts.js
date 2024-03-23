const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }, 
  
  likes: {
    type: Number,
    default: 0 // Default value for likes count
  },
  likedBy: [String] // Store usernames as strings
}, { timestamps: true });


postSchema.methods.like = async function(userId) {
  // Check if the user has already liked the post
  if (!this.likedBy.includes(userId)) {
    this.likes += 1;
    this.likedBy.push(userId);
    await this.save();
  } else {
    throw new Error('User has already liked thiss post.');
  }
};

postSchema.statics.creatingpost = async function(title, content, name) {

  
  const text = await this.create({ title, content, name })

  return text
}

module.exports = mongoose.model('Post', postSchema)