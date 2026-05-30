import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Hero', id: 'hero' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Hire Me', id: 'hire' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 h-16 px-6 flex items-center justify-between glass border-b border-white/5 transition-all duration-300 ${scrolled ? 'bg-bg-primary/90' : ''}`}
    >
      {/* Logo */}
      <span className="font-syne text-xl font-extrabold text-white tracking-tight">
        PRASHANT<span className="text-[#00D4FF]">.S</span>
      </span>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        {links.map(l => (
          <li key={l.id}>
            <button
              onClick={() => scroll(l.id)}
              className="text-slate-400 hover:text-[#00D4FF] text-sm font-medium transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#00D4FF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250" />
            </button>
          </li>
        ))}
      </ul>

      {/* Resume CTA */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="hidden md:inline-block text-[#00D4FF] border border-[#00D4FF] px-4 py-1.5 rounded-md text-xs font-semibold hover:bg-[#00D4FF] hover:text-black hover:glow-blue transition-all duration-200"
      >
        View Resume ↗
      </a>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(o => !o)}
        className="md:hidden flex flex-col gap-1.5 p-1"
        aria-label="Menu"
      >
        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 right-0 glass border-b border-white/5 px-6 py-4 flex flex-col gap-4 md:hidden"
          >
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => scroll(l.id)}
                className="text-slate-400 hover:text-[#00D4FF] text-sm font-medium text-left transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-[#00D4FF] text-sm font-semibold">
              View Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
