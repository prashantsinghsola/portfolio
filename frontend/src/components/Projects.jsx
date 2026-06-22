import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import axios from 'axios'

const FALLBACK_PROJECTS = [
  { _id: '1', image: '/images/projects/1.png', icon: '🤖', title: 'CareerAI', desc: 'Full Stack AI Career Recommendation SaaS Platform with resume parsing, skill-gap analysis Recharts tracker, and intelligent OpenAI API recommendations.', tags: ['Next.js 14', 'React 18', 'Node.js', 'Tailwind CSS', 'OpenAI API', 'Recharts', 'Python', 'Scikit-learn', 'Radix UI'], demo: 'https://careercompasswithai.vercel.app/', github: 'https://github.com/prashantsinghsola', color: '#00D4FF' },
  { _id: '2', image: '/images/projects/2.png', icon: '✈️', title: 'Wanderlust', desc: 'Production-ready, full-stack vacation rental listing platform similar to Airbnb, including JWT session auth, fully responsive UI, and custom Mongoose CRUD schema modeling.', tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM', 'Tailwind CSS', 'JWT Auth', 'EJS'], demo: '#', github: 'https://github.com/prashantsinghsola', color: '#FF385C' },
  { _id: '3', image: '/images/projects/3.png', icon: '☕', title: 'AI-Powered Java Web App', desc: 'Enterprise-grade Java web application incorporating AI-integrated modules, object-oriented REST API routing, and optimized MySQL queries. Developed during HCL Tech internship.', tags: ['Java OOP', 'MySQL', 'REST APIs', 'AI Integration', 'Agile', 'SDLC'], demo: '#', github: 'https://github.com/prashantsinghsola', color: '#F89820' },
]

function ProjectCard({ p, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#111827] border border-white/5 rounded-2xl overflow-hidden group hover:border-[#00D4FF]/25 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
    >
      {/* Image area */}
      <div
        className="h-44 flex items-center justify-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg,${p.color}18,${p.color}06)` }}
      >
        {p.image ? (
          <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.style.display = 'none'; }} />
        ) : null}
        
        {(!p.image) && (
          <div className="text-5xl opacity-50 group-hover:scale-110 transition-transform duration-400 relative z-10">
            {p.icon}
          </div>
        )}
        <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(135deg,${p.color}06,transparent)` }} />
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="font-syne font-bold text-white text-lg mb-1.5">{p.title}</h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-4">{p.desc}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tags.map(t => (
            <span key={t} className="text-[10px] text-slate-400 bg-white/4 border border-white/6 rounded px-2 py-0.5">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a href={p.demo} target="_blank" rel="noreferrer" className="text-xs font-semibold text-[#00D4FF] hover:opacity-70 transition-opacity">
            ↗ Live Demo
          </a>
          <a href={p.github} target="_blank" rel="noreferrer" className="text-xs font-medium text-slate-500 hover:text-slate-300 transition-colors">
            ⌥ GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState(FALLBACK_PROJECTS)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    axios.get('/api/projects')
      .then(r => { if (r.data?.length) setProjects(r.data) })
      .catch(() => {}) // silently use fallback
  }, [])

  return (
    <section id="projects" className="py-24 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-[#00D4FF] text-xs font-semibold uppercase tracking-widest mb-2">
            <span className="w-5 h-px bg-[#00D4FF]" /> Projects
          </div>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">Things I've Built</h2>
          <p className="text-slate-400 text-sm max-w-lg mb-12">
            A curated selection of full-stack projects — each solving a real problem with clean code.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => <ProjectCard key={p._id || i} p={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
