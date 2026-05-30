const express = require('express')
const router  = express.Router()
const Project = require('../models/Project')

// GET all projects (sorted by order)
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 })
    res.json(projects)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects' })
  }
})

// GET single project
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
    if (!project) return res.status(404).json({ error: 'Project not found' })
    res.json(project)
  } catch {
    res.status(500).json({ error: 'Failed to fetch project' })
  }
})

// POST create project (basic auth via secret header)
router.post('/', requireSecret, async (req, res) => {
  try {
    const project = await Project.create(req.body)
    res.status(201).json(project)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// PUT update project
router.put('/:id', requireSecret, async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!project) return res.status(404).json({ error: 'Project not found' })
    res.json(project)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// DELETE project
router.delete('/:id', requireSecret, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id)
    res.json({ message: 'Project deleted' })
  } catch {
    res.status(500).json({ error: 'Failed to delete project' })
  }
})

// Simple secret middleware (set ADMIN_SECRET in .env)
function requireSecret(req, res, next) {
  const secret = req.headers['x-admin-secret']
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  next()
}

module.exports = router
