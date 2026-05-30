const express  = require('express')
const router   = express.Router()
const Contact  = require('../models/Contact')
const nodemailer = require('nodemailer')

// POST — save contact & optionally email you
router.post('/', async (req, res) => {
  const { name, email, message } = req.body

  // Basic validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'All fields are required' })
  }
  if (message.length > 2000) {
    return res.status(400).json({ error: 'Message too long (max 2000 chars)' })
  }

  try {
    // Save to MongoDB
    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      ip: req.ip,
    })

    // Optional: send email notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
        })
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_TO || process.env.EMAIL_USER,
          subject: `📩 Portfolio contact from ${name}`,
          html: `
            <h2>New Contact from Portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <small>Received at ${new Date().toLocaleString()}</small>
          `,
        })
      } catch (emailErr) {
        console.warn('Email notification failed (non-critical):', emailErr.message)
      }
    }

    res.status(201).json({ message: 'Message received! I\'ll get back to you soon.' })
  } catch (err) {
    console.error('Contact save error:', err)
    res.status(500).json({ error: 'Failed to save message. Please try WhatsApp.' })
  }
})

// GET all contacts (admin only)
router.get('/', requireSecret, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch {
    res.status(500).json({ error: 'Failed to fetch contacts' })
  }
})

// PATCH mark as read
router.patch('/:id/read', requireSecret, async (req, res) => {
  try {
    const c = await Contact.findByIdAndUpdate(req.params.id, { read: true }, { new: true })
    res.json(c)
  } catch {
    res.status(500).json({ error: 'Failed to update' })
  }
})

function requireSecret(req, res, next) {
  if (req.headers['x-admin-secret'] !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  next()
}

module.exports = router
