const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  name:    { type: String, required: true, trim: true, maxlength: 100 },
  email:   { type: String, required: true, trim: true, lowercase: true,
             match: [/^\S+@\S+\.\S+$/, 'Invalid email'] },
  message: { type: String, required: true, trim: true, maxlength: 2000 },
  read:    { type: Boolean, default: false },
  ip:      { type: String },
}, { timestamps: true })

module.exports = mongoose.model('Contact', contactSchema)
