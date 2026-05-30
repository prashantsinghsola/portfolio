import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import axios from 'axios'
import toast from 'react-hot-toast'

const WA_NUMBER = '7060127157' // ← Replace with your WhatsApp number (no +)
const WA_MESSAGE = encodeURIComponent(
  "Hi Prashant! I came across your portfolio and I'm interested in discussing a potential project with you. Are you available for a chat?"
)

export default function HireMe() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return toast.error('Fill all fields')
    setLoading(true)
    try {
      await axios.post('/api/contact', form)
      toast.success('Message sent! I\'ll get back to you soon.')
      setForm({ name: '', email: '', message: '' })
    } catch {
      toast.error('Failed to send. Try WhatsApp instead.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="hire" className="py-24 bg-[#060912] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%,rgba(0,212,255,0.07),transparent)' }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 text-xs text-green-400 font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for freelance & full-time
          </div>
          <h2 className="font-syne text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Let's Build Something<br />
            <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Have a project in mind? Drop a message below or ping me directly on WhatsApp.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={submit}
            className="bg-[#0d1117] border border-white/5 rounded-2xl p-7 space-y-4"
          >
            <h3 className="font-syne font-bold text-white text-lg mb-1">Send a Message</h3>
            {[
              { name: 'name', placeholder: 'Your Name', type: 'text' },
              { name: 'email', placeholder: 'Your Email', type: 'email' },
            ].map(f => (
              <input
                key={f.name}
                type={f.type}
                name={f.name}
                placeholder={f.placeholder}
                value={form[f.name]}
                onChange={handle}
                className="w-full bg-white/5 border border-white/8 rounded-lg px-4 py-3 text-sm text-slate-300 placeholder-slate-600 outline-none focus:border-[#00D4FF]/40 focus:bg-white/6 transition-all"
              />
            ))}
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows={4}
              value={form.message}
              onChange={handle}
              className="w-full bg-white/5 border border-white/8 rounded-lg px-4 py-3 text-sm text-slate-300 placeholder-slate-600 outline-none focus:border-[#00D4FF]/40 focus:bg-white/6 transition-all resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#00D4FF] text-black font-semibold py-3 rounded-lg text-sm hover:glow-blue hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message →'}
            </button>
          </motion.form>

          {/* Right side: WhatsApp + socials */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-bold py-4 rounded-xl text-base hover:glow-green hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-xl">💬</span>
              Message on WhatsApp
            </a>

            <p className="text-center text-xs text-slate-600">— or connect via —</p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: '✉ Email', href: 'mailto:prashantsinghphitkari@gmail.com', sub: 'prashantsinghphitkari@gmail.com' },
                { label: 'in LinkedIn', href: 'https://linkedin.com/in/prashant-singh-78ps', sub: '/in/prashant-singh-78ps' },
                { label: '⌥ GitHub', href: 'https://github.com/prashantsinghsola', sub: '/prashantsinghsola' },
                { label: '🎓 Education', href: 'https://www.iimtindia.net', sub: 'IIMT College (B.Tech CSE)' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#0d1117] border border-white/5 rounded-xl px-4 py-3.5 hover:border-[#00D4FF]/25 hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="text-sm font-medium text-slate-300 group-hover:text-[#00D4FF] transition-colors">{s.label}</div>
                  <div className="text-xs text-slate-600 mt-0.5">{s.sub}</div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
