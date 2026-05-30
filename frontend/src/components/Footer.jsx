export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 text-center">
      <p className="text-xs text-slate-500">
        Designed & built by <span className="text-[#00D4FF]">Prashant Singh</span> · {new Date().getFullYear()}
      </p>
      <p className="text-[11px] text-slate-600 mt-1">React · Node.js · MongoDB · Tailwind CSS · Framer Motion</p>
    </footer>
  )
}
