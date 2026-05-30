import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EXPERIENCE = [
  {
    date: 'Mar 2026 – Present',
    role: 'Web Development Intern',
    company: 'Bala Infotech · Meerut, India',
    desc: 'Building responsive, cross-browser-compatible websites using HTML5, CSS3, and JavaScript (ES6+) for diverse client projects in a full-service digital marketing and web development agency. Developing dynamic backend solutions using PHP and MySQL, including relational database design, CRUD operations, and server-side business logic for production-level client web applications.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'PHP', 'MySQL', 'Relational Database', 'CRUD'],
  },
  {
    date: 'Oct 2025 – Feb 2026',
    role: 'Web Development Intern',
    company: 'SoftCure Technology LLP · Meerut, India',
    desc: 'Developed dynamic, data-driven web modules using PHP, AJAX, jQuery, and MySQL for live client-facing applications; built and integrated REST-based features enabling seamless asynchronous data flow. Wrote optimized, indexed MySQL queries for CRUD operations, improving database performance; created responsive mobile-first UI components with jQuery and modern CSS, enhancing UX consistency. Debugged complex UI/logic issues, reduced system bottlenecks, and improved overall application performance under senior developer mentorship on real production client projects.',
    tags: ['PHP', 'AJAX', 'jQuery', 'MySQL', 'REST APIs', 'Query Optimization', 'Mobile-First UI'],
  },
  {
    date: 'Oct 2024 – Mar 2025',
    role: 'Java Web Development with AI Intern',
    company: 'HCL Tech (UPSDM) · Meerut, India',
    desc: 'Worked with MySQL, REST APIs, and front-end technologies in an enterprise environment; collaborated in a 5-member cross-functional team to architect and build a real-world AI-integrated web application. Applied object-oriented Java programming, REST API integration, agile sprint planning, and SDLC best practices throughout the project lifecycle.',
    tags: ['Java', 'MySQL', 'REST APIs', 'AI Integration', 'Agile', 'SDLC', 'OOP'],
  },
]

function TimelineItem({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-6 pb-10"
    >
      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#00D4FF] border-2 border-[#0d1117]"
        style={{ boxShadow: '0 0 12px rgba(0,212,255,0.5)', transform: 'translateX(-50%)' }} />

      <div className="text-[11px] text-[#00D4FF] font-semibold uppercase tracking-widest mb-1">{item.date}</div>
      <div className="font-syne text-xl font-bold text-white mb-0.5">{item.role}</div>
      <div className="text-sm text-slate-400 mb-3">{item.company}</div>
      <p className="text-sm text-slate-500 leading-relaxed max-w-xl mb-3">{item.desc}</p>
      <div className="flex flex-wrap gap-2">
        {item.tags.map(t => (
          <span key={t} className="text-[11px] font-medium text-[#00D4FF] bg-[#00D4FF]/8 border border-[#00D4FF]/20 rounded px-2 py-0.5">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="experience" className="py-24 bg-[#0d1117]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-[#00D4FF] text-xs font-semibold uppercase tracking-widest mb-2">
            <span className="w-5 h-px bg-[#00D4FF]" /> Experience
          </div>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">Where I've Worked</h2>
          <p className="text-slate-400 text-sm max-w-lg mb-12">
            A journey through roles that shaped my craft — from startup speed to enterprise scale.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-3" style={{ borderLeft: '1px solid linear-gradient(to bottom,#00D4FF,transparent)' }}>
          <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom,#00D4FF,transparent)' }} />
          {EXPERIENCE.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
