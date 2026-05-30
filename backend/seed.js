// Run: node seed.js
require('dotenv').config()
const mongoose = require('mongoose')
const Project  = require('./models/Project')

const PROJECTS = [
  { icon:'🤖', title:'CareerAI', image:'/images/projects/1.png', desc:'Full Stack AI Career Recommendation SaaS Platform with resume parsing, skill-gap analysis Recharts tracker, and intelligent OpenAI API recommendations.', tags:['Next.js 14','React 18','Node.js','Tailwind CSS','OpenAI API','Recharts','Python','Scikit-learn','Radix UI'], demo:'https://github.com/prashantsinghsola', github:'https://github.com/prashantsinghsola', color:'#00D4FF', order:1 },
  { icon:'✈️', title:'Wanderlust', image:'/images/projects/2.png', desc:'Production-ready, full-stack vacation rental listing platform similar to Airbnb, including JWT session auth, fully responsive UI, and custom Mongoose CRUD schema modeling.', tags:['React.js','Node.js','Express.js','MongoDB','Mongoose ODM','Tailwind CSS','JWT Auth','EJS'], demo:'https://github.com/prashantsinghsola', github:'https://github.com/prashantsinghsola', color:'#FF385C', order:2 },
  { icon:'☕', title:'AI-Powered Java Web App', image:'/images/projects/3.png', desc:'Enterprise-grade Java web application incorporating AI-integrated modules, object-oriented REST API routing, and optimized MySQL queries. Developed during HCL Tech internship.', tags:['Java OOP','MySQL','REST APIs','AI Integration','Agile','SDLC'], demo:'https://github.com/prashantsinghsola', github:'https://github.com/prashantsinghsola', color:'#F89820', order:3 },
]

async function seed() {
  await mongoose.connect(process.env.MONGO_URI)
  await Project.deleteMany({})
  await Project.insertMany(PROJECTS)
  console.log('✅ Seeded', PROJECTS.length, 'projects')
  process.exit(0)
}

seed().catch(err => { console.error(err); process.exit(1) })
