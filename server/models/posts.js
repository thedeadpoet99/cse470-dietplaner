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
  }
}, { timestamps: true })

postSchema.statics.creatingpost = async function(title, content, name) {

  
  const text = await this.create({ title, content, name })

  return text
}

module.exports = mongoose.model('Post', postSchema)