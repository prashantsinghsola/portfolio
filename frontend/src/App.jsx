import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import { clockCursor } from 'cursor-effects'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import HireMe from './components/HireMe'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const cursor = clockCursor({
      dateColor: '#00D4FF',
      faceColor: '#7C3AED',
      secondsColor: '#f1f5f9',
      minutesColor: '#cbd5e1',
      hoursColor: '#94a3b8'
    });
    return () => cursor.destroy();
  }, []);

  return (
    <>
      <Toaster position="bottom-right" toastOptions={{ style: { background: '#0d1117', color: '#f1f5f9', border: '1px solid rgba(255,255,255,0.08)' } }} />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <HireMe />
      </main>
      <Footer />
    </>
  )
}
