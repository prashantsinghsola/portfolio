const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  icon:     { type: String, default: '🚀' },
  image:    { type: String, default: '' },
  title:    { type: String, required: true, trim: true },
  desc:     { type: String, required: true, trim: true },
  tags:     [{ type: String, trim: true }],
  demo:     { type: String, default: '#' },
  github:   { type: String, default: '#' },
  color:    { type: String, default: '#00D4FF' },
  featured: { type: Boolean, default: false },
  order:    { type: Number, default: 0 },
}, { timestamps: true })

module.exports = mongoose.model('Project', projectSchema)
