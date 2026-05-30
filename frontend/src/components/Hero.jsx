import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 pb-12 px-6 relative overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,1) 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 bg-[#00D4FF]/10 border border-[#00D4FF]/20 rounded-full px-3 py-1 text-xs text-[#00D4FF] font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse-dot" />
            Open to opportunities
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} className="font-syne text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-3">
            Prashant<br />
            <span className="gradient-text">Singh</span>
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="text-slate-400 text-lg font-light mb-4 tracking-wide">
            Full Stack MERN Developer
          </motion.p>

          <motion.p {...fadeUp(0.4)} className="text-slate-500 text-sm leading-relaxed max-w-md mb-8">
            Final-year B.Tech CSE student and Full Stack MERN Developer with hands-on expertise in designing, building, testing, and deploying scalable web applications and production-grade RESTful APIs. Experienced across 3 real-world internships.
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 mb-10">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-[#00D4FF] text-black font-semibold px-6 py-3 rounded-lg text-sm hover:glow-blue hover:-translate-y-0.5 transition-all duration-200 inline-block"
            >
              View Resume ↗
            </a>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/10 text-slate-300 hover:border-[#00D4FF] hover:text-[#00D4FF] px-6 py-3 rounded-lg text-sm transition-all duration-200"
            >
              See My Work
            </button>
          </motion.div>

          <motion.div {...fadeUp(0.6)} className="flex gap-10">
            {[
              { val: '3', label: 'Internships' },
              { val: '5+', label: 'Projects' },
              { val: '70.78%', label: 'B.Tech CSE' }
            ].map((item) => (
              <div key={item.label}>
                <div className="font-syne text-3xl font-extrabold text-white">
                  {item.val.includes('+') ? (
                    <>
                      {item.val.replace('+', '')}<span className="text-[#00D4FF]">+</span>
                    </>
                  ) : item.val.includes('%') ? (
                    <>
                      {item.val.replace('%', '')}<span className="text-[#00D4FF]">%</span>
                    </>
                  ) : (
                    <>
                      {item.val}
                    </>
                  )}
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center items-center relative"
        >
          {/* Orbits */}
          <div className="absolute" style={{
            width: 380, height: 380,
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            borderRadius: '50%',
            border: '1px dashed rgba(0,212,255,0.12)',
            animation: 'orbit-spin 20s linear infinite',
          }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#00D4FF]" style={{ boxShadow: '0 0 10px #00D4FF' }} />
          </div>
          <div className="absolute" style={{
            width: 430, height: 430,
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            borderRadius: '50%',
            border: '1px dashed rgba(124,58,237,0.1)',
            animation: 'orbit-spin 30s linear infinite reverse',
          }} />

          {/* Floating ring */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-72 h-72 md:w-80 md:h-80 rounded-full relative z-10"
          >
            <div className="w-full h-full rounded-full border-glow flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,rgba(0,212,255,0.1),rgba(124,58,237,0.18))' }}>
              <img src="/avatar.jpg" alt="Profile" className="w-[90%] h-[90%] rounded-full object-cover border-4 border-[#0d1117]/50" onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=Prashant+Singh&background=0d1117&color=00D4FF&size=256"; }} />
            </div>
          </motion.div>

          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% 50%,rgba(0,212,255,0.06),transparent 70%)' }} />
        </motion.div>
      </div>
    </section>
  )
}
