import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['JavaScript (ES6+)', 'Java', 'Python', 'PHP', 'C', 'HTML5', 'CSS3', 'SQL'],
    color: 'rgba(0, 212, 255, 0.25)',
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['React.js', 'Next.js 14', 'Redux', 'Tailwind CSS', 'Bootstrap', 'EJS', 'Responsive Design', 'DOM Manipulation', 'Chart.js', 'jQuery', 'Recharts', 'Radix UI'],
    color: 'rgba(124, 58, 237, 0.25)',
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'PHP', 'RESTful APIs', 'JWT Authentication', 'Middleware', 'AJAX', 'Server-side Rendering', 'OpenAI API'],
    color: 'rgba(37, 211, 102, 0.25)',
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Mongoose ODM', 'Database Design', 'Schema Modeling', 'Query Optimization', 'Indexing'],
    color: 'rgba(245, 158, 11, 0.25)',
  },
  {
    title: 'DevOps & Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Docker', 'AWS', 'npm', 'Postman', 'VS Code', 'Agile / Scrum', 'CI/CD'],
    color: 'rgba(236, 72, 153, 0.25)',
  },
  {
    title: 'CMS & SEO',
    icon: '🚀',
    skills: ['WordPress', 'Custom Themes & Plugins', 'On-Page SEO', 'Social Media Marketing', 'Digital Marketing'],
    color: 'rgba(6, 182, 212, 0.25)',
  },
  {
    title: 'AI / ML',
    icon: '🤖',
    skills: ['NLP', 'Resume Parsing', 'Recommendation Systems', 'Collaborative Filtering', 'Scikit-learn', 'HuggingFace'],
    color: 'rgba(168, 85, 247, 0.25)',
  },
]

function CategoryCard({ cat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#0d1117] border border-white/5 rounded-2xl p-6 hover:border-[#00D4FF]/25 hover:shadow-[0_0_30px_rgba(0,212,255,0.04)] hover:-translate-y-1 transition-all duration-300 relative group"
    >
      {/* Background corner glow */}
      <div 
        className="absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 100% 0%, ${cat.color}, transparent 70%)` }}
      />

      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl p-2 bg-white/5 rounded-xl block group-hover:scale-110 transition-transform duration-300">
          {cat.icon}
        </span>
        <h3 className="font-syne font-bold text-white text-lg group-hover:text-[#00D4FF] transition-colors">
          {cat.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2 relative z-10">
        {cat.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs text-slate-400 bg-white/5 border border-white/5 hover:border-[#00D4FF]/30 hover:bg-[#00D4FF]/5 hover:text-white px-2.5 py-1 rounded-lg transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="skills" className="py-24 bg-[#060912] relative overflow-hidden">
      {/* Light glow pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D4FF]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#00D4FF]/10 border border-[#00D4FF]/20 rounded-full px-3 py-1 text-xs text-[#00D4FF] font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
            Full Stack Toolbox
          </div>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">My Tech Stack</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            A comprehensive overview of the programming languages, libraries, databases, and systems I work with.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
